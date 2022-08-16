import '../styles/globals.css'
import type { AppProps } from 'next/app'
import superjson from 'superjson'
import { withTRPC } from '@trpc/next'
import { loggerLink } from '@trpc/client/links/loggerLink'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { AppRouter } from '../server/route/app.router'
import { url } from '../constants'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default withTRPC<AppRouter>({
  config({ctx}){

    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url: url
      })
    ]

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          }
        }
        return {}
      },
      links,
      transformer: superjson,
    }
  },
  ssr: false,
})(MyApp)


