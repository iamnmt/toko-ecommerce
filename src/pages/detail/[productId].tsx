import type { NextPage } from 'next'
import Image from 'next/image'
import ProductPrice from '../../components/minor/ProductPrice'
import RatingBar from '../../components/minor/RatingBar'

const tmp_product_data : any = {
  id: 1, 
  image: 'product-detail.jpg.webp',
  name: 'South Of The Border, West Of The Sun (Paperback)',
  author: 'Haruki Murakami',
  rating: 4,
  soldCount: 10,
  price: 100000,
  discountPercentage: 5,
  description: "Growing up in the suburbs in post-war Japan, it seemed to Hajime that everyone but him had brothers and sisters. His sole companion was Shimamoto, also an only child. Together they spent long afternoons listening to her father's record collection. But when his family moved away, the two lost touch. Now Hajime is in his thirties. After a decade of drifting he has found happiness with his loving wife and two daughters, and success running a jazz bar. Then Shimamoto reappears. She is beautiful, intense, enveloped in mystery. Hajime is catapulted into the past, putting at risk all he has in the present."
}

const Detail : NextPage = () => {
  const { image, author, name, rating, soldCount, description, price, discountPercentage } = tmp_product_data
  return (
    <div className="w-[1270px] mx-12">
      <div className="grid grid-cols-3 bg-white">
        <div className="flex justify-center items-center border-r border-gray-200">
          <div className="py-4">
            <Image width='400' height='400' src={`/images/resources/${image}`}/>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="border-b border-gray-200">
            <div className="flex flex-col gap-2 p-4">
              <p className="text-sm">Author: <a className="text-dark_blue cursor-pointer">{author}</a></p>
              <p className="text-2xl font-light">{name}</p>
              <div className="flex items-center">
                <RatingBar activeCount={rating} size={20} />
                <div className="w-[2px] h-4 bg-[#c7c7c7] mx-1.5"></div>
                <span className="text-[#787878] font-medium">{soldCount} Sold</span>
              </div>
              <ProductPrice price={price} discountPercentage={discountPercentage} />
            </div>
          </div>
          <div className="py-2 px-4">
            <div className="text-justify">
              <p className="text-xl font-medium mb-2">Description</p>
              {description}
            </div>
            <div>
              <div className="my-2">
                <label className="font-medium" htmlFor="quantity">Quantity</label>
              </div>
              <div className="flex items-stretch">
                <button className="border border-gray-200 p-1 border-r-0 rounded-l-sm"><img src="/images/resources/icons-remove.svg"/></button>
                <input className="w-10 text-center border border-gray-200 outline-none" name="quantity" type="input" defaultValue="1"/>
                <button className="border border-gray-200 p-1 border-l-0 rounded-r-sm"><img src="/images/resources/icons-add.svg"/></button>
              </div>
              <button className="h-[48px] w-[300px] bg-[#ff424e] text-white font-medium rounded-md my-4">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
