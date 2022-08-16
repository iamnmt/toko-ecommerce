function ProductPrice({ price, discountPercent } : {
  price: number
  discountPercent: number
}) {
  const discountedPrice = Math.round((1-discountPercent) * price)
  return (
    <div className="text-lg font-medium">
      { discountPercent != 0 ? 
      <div className="flex items-center">
        <div className="text-[#ff424e]">{(discountedPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</div>
        <div className="text-xs text-red-600 font-normal bg-red-100 px-1 ml-2 border border-red-600 rounded">-{discountPercent*100}%</div>
      </div> :
      <div>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND</div>
      }
    </div>
  )
}

export default ProductPrice
