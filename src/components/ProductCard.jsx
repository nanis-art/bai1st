function ProductCard({ product }) {
  return (
    <div className="boxsp">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">
        {product.price.toLocaleString("vi-VN")}₫
      </p>

      <button>Thêm giỏ hàng</button>
    </div>
  );
}

export default ProductCard;
