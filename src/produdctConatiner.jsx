import { useEffect, useState } from "react";
import ProductCard from "./components/productcard";
import Header from "./components/header";

const ProductContainer = () => {
  const [productList, setProductList] = useState([]); // original produc list rakhne
  const [filteredProduct, setFilterProduct] = useState([]); // filter proudct and render
  const [loading, setLoading] = useState(false);

  // mouting  componentDidMount()
  useEffect(() => {
    setLoading(true);
    // fetch always return the promise
    // res.json() => promise
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((result) => {
        setProductList(result);
        setFilterProduct(result);
        setLoading(false);
      })
    );
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

  const searchHandler = (e) => {
    const { value } = e.target; // destructring
    const searchResult = productList.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilterProduct(searchResult);
  };

  return (
    <>
      <Header onChange={searchHandler} />
      <div className="p-container">
        {
          // Js  code
          filteredProduct.length >= 1 &&
            filteredProduct.map((product, index) => {
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
    </>
  );
};

export default ProductContainer;
