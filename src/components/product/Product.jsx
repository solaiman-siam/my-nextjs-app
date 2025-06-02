

function Product({product}) {
  return (
    <div className="h-[400px]">
        <img className="h-[400px] rounded-lg" src={product?.image} alt="" />
        <h3 className="text-lg font-semibold pt-4">{product?.productName}</h3>
    </div>
  )
}

export default Product