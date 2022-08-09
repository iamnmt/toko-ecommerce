import Image from "next/image"
import ProductPrice from "./minor/ProductPrice"
import RatingBarProduct from "./minor/RatingBarProduct"

function ProductItem({ info } : any) {
  const { image, name, rating, soldCount, price, discountPercentage } = info
  return (
    <a className="cursor-pointer hover:shadow-2xl">
      <div className="px-3 py-2 w-min">
        <div className="m-3 w-[200px] h-[200px]">
          <Image width='200' height='200' src={`/images/resources/${image}`}/>
        </div>
        <div className="flex flex-col">
          <p className="text-sm break-words">{name}</p>
          <RatingBarProduct activeCount={rating} soldCount={soldCount} />
          <ProductPrice price={price} discountPercentage={discountPercentage} />
        </div>
      </div>
    </a>
  )
}

export default ProductItem
