import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Toko | Book Store Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[1270px] mx-12">
        <div className="flex items-center bg-red-200">
          <div>
            Sidebar
          </div>
          <div>
            <div>
              Sorter
            </div>
            <div>
              ProductList
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
