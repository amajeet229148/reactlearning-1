import { useEffect, useState } from "react";
import ProductCard from "./components/productcard";

const ProductContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((result) => {
        setProductList(result);
        setLoading(false);
      })
    );
    // this will call only  once s
  }, []);

  const removeProduct = (productId) => {
    const filterProduct = productList?.filter(
      (product) => product.id !== productId
    );
    setProductList(filterProduct);
  };

  if (loading) {
    return <div>Loading......</div>;
  }

  return (
    <div className="p-container">
      {
        // Js  code
        productList.length >= 1 &&
          productList.map((product, index) => {
            console.log(product, index);
            return (
              <ProductCard
                product={product}
                key={index}
                index={index}
                removeProduct={removeProduct}
              />
            );
          })
      }
    </div>
  );
};

export default ProductContainer;
