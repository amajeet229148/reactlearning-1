import { useCallback, useEffect, useState } from "react";
import ProductCard from "./components/productcard";
import Header from "./components/header";
import EmptyScreen from "./components/empty-screen";
import Dropdown from "./components/dropdown";

const ProductContainer = () => {
  const [productList, setProductList] = useState([]); // original produc list rakhne
  const [filteredProduct, setFilterProduct] = useState([]); // filter proudct and render
  const [loading, setLoading] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [sortValue, setSortValue] = useState("asc");
  const [isError, setError] = useState(false);
  const productData12 = [];
  // mouting  componentDidMount()

  useEffect(() => {
    // alert("ProDUCT cONTAINER Component");
    console.log("Product Conatiner Component");
  }, []);

  const fetchProduct = (sortKey) => {
    setLoading(true);
    setError(false);
    // fetch always return the promise
    // res.json() => promise
    fetch(`https://fakestoreapi.com/products?sort=${sortKey}`).then((res) =>
      res
        .json()
        .then((result) => {
          setProductList(result);
          setFilterProduct(result);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    );
  };

  const addProduct = (productId) => {
    setProductCount(productCount + 1);
  };

  // here if sortValue is changing calling function
  useEffect(() => {
    fetchProduct(sortValue);
  }, [sortValue]);

  if (loading) {
    return <div className="empty">Loading......</div>;
  }

  const searchHandler = (e) => {
    const { value } = e.target; // destructring
    const searchResult = productList.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilterProduct(searchResult);
  };

  const dropHandler = (e) => {
    setSortValue(e?.target?.value?.toLowerCase());
    // below line no 64 is equivalent to code 45
    // fetchProduct(e?.target?.value?.toLowerCase());
  };

  return (
    <>
      <Header onChange={searchHandler} count={productCount} />
      <div className="drop-cont">
        <Dropdown
          options={["Asc", "Desc"]}
          dropdownHandler={dropHandler}
          selectedValue={sortValue}
        />
      </div>
      <div className="p-container">
        {
          // Js  code
          filteredProduct.length >= 1 && !loading ? (
            filteredProduct.map((product, index) => {
              return (
                <ProductCard
                  product={product}
                  key={index}
                  index={index}
                  addProduct={addProduct}
                />
              );
            })
          ) : (
            <div className="empty">
              <EmptyScreen
                title="No Data Found"
                description="Please retry typing another value"
              />
            </div>
          )
        }
      </div>
    </>
  );
};

export default ProductContainer;

// Props
// state
// Components (in -progress)
// useEffect (practise)
// useState (practise)
// JSX (preactise)
// complex jsx writing
// handilng empty screen
// handling loading state
// creating resusable components
// class components
// Virtual dom
// Dom
// React-fiber and re-concilation
// differ algorithm
// pre-updated virtual dom
// setState async
// why we should not update state directly

// Controlled components
// Uncontrolled components
// Custom hooks
// useMemo
// useCallBack
// Keys
// Pure component
// React Lazy
// useRef
// ForwardRef
// one way binding
// achive two way binding in react
// Higher Order Component
// MUI react
// Tailwind
// React portal
// Context api
// useContext
// useReducer

// const data = compareFunction(a, b);
// a  can be nested array b can nested object , a can array b c
