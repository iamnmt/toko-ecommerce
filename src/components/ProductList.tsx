import ProductItem from "./ProductItem"

function ProductList({ productData } : any) {
  return (
    <div className="flex flex-wrap justify-between">
      {productData.map((info : any) => <ProductItem key={info.id} info={info} />)}
    </div>
  )
}

export default ProductList
