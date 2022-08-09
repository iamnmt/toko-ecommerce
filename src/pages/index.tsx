import type { NextPage } from 'next'
import Head from 'next/head'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'
import Sorter from '../components/Sorter'

const tmp_product_data : any = [
  {
    id: 0, 
    image: 'product-preview.jpg.webp',
    name: 'South Of The Border, West Of The Sun (Paperback)',
    rating: 5,
    soldCount: 10,
    price: 100000,
    discountPercentage: 0
  },
  {
    id: 1, 
    image: 'product-preview.jpg.webp',
    name: 'South Of The Border, West Of The Sun (Paperback)',
    rating: 5,
    soldCount: 10,
    price: 100000,
    discountPercentage: 0
  },
  {
    id: 2, 
    image: 'product-preview.jpg.webp',
    name: 'South Of The Border, West Of The Sun (Paperback)',
    rating: 5,
    soldCount: 10,
    price: 100000,
    discountPercentage: 0
  },
  {
    id: 3, 
    image: 'product-preview.jpg.webp',
    name: 'South Of The Border, West Of The Sun (Paperback)',
    rating: 5,
    soldCount: 10,
    price: 100000,
    discountPercentage: 0
  },
  {
    id: 4,
    image: 'product-preview.jpg.webp',
    name: 'South Of The Border, West Of The Sun (Paperback)',
    rating: 5,
    soldCount: 10,
    price: 100000,
    discountPercentage: 0
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Toko | Book Store Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[1270px] mx-12">
        <div className="grid grid-cols-5 py-2 bg-red-200">
          <Sidebar />
          <div className="bg-gray-200 col-span-4">
            <Sorter/>
            <ProductList productData={tmp_product_data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
