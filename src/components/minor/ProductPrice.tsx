function ProductPrice({ price, discountPercentage } : {
  price: number
  discountPercentage: number
}) {
  const discountedPrice = Math.round((price * (100 - discountPercentage))/100)
  return (
    <div className="text-lg font-medium">
      { discountPercentage ? 
      <div className="flex items-center">
        <div className="text-[#ff424e]">{(discountedPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</div>
        <div className="text-xs text-red-600 font-normal bg-red-100 px-1 ml-2 border border-red-600 rounded">-{discountPercentage}%</div>
      </div> :
      <div>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</div>
      }
    </div>
  )
}

export default ProductPrice
