import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Toko | Book Store Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[1270px] mx-12">
        <div className="flex items-center py-2 bg-red-200">
          <Sidebar />
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
