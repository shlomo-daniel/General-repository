import Counter from "./counter";

function Product({
  product: {
    id,
    title,
    category,
    description,
    image,
    price,
    discount,
    instock,
    quantity,
  },
  onChange,
}) {
  const calcedDiscountPrice = price * (1 - discount);

  return (
    <div className="card " style={{ width: "15rem" }}>
      <h5 className="card-title">{title}</h5>
      <h6>{category}</h6>
      <img src={image.url} alt={image.alt} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <span className="text-decoration-line-through">{price}$</span>
        <br />

        <span className="text-danger">{calcedDiscountPrice}$</span>
      </div>
      <Counter
        id={id}
        quantity={quantity}
        instock={instock}
        onChange={onChange}
      />
    </div>
  );
}
export default Product;
