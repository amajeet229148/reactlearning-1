import { useEffect } from "react";
import Button from "../button/button";
import "./product.css";
const ProductCard = (props) => {
  const { id, image, title, rating, price } = props.product; // destructring object
  useEffect(() => {
    // alert("Product Card COMPONENT");
    console.log("Product card");
  }, []);
  return (
    <div className="product">
      <div className="img-cont">
        <img src={image} height={"100%"} width={"100%"} alt={title} />
      </div>
      <div className="sub-container">
        <div className="header m-5 text-l">{title}</div>
        <div className="header m-5 text-l">
          <span className="text-l">&#11088; {rating.rate}</span>
          <span className="m-5  title">Reviews {rating.count}</span>
        </div>
        <div className="footer">
          <span className="header m-5">RS.{price}</span>
          <Button onClick={() => props.addProduct(id)}>Add</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

// const object = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

// const { image } = object;

// Typography
