import { useEffect } from "react";
import Input from "../input";
import "./header.css";

const Header = (props) => {
  useEffect(() => {
    // alert("hEADER COMPONENT");
    console.log("hEADER Component");
  }, []);

  return (
    <nav className="header-container ">
      <div className="logo">Witviper</div>
      <Input
        placeHolder="Search over 10000 products."
        onChange={props.onChange}
      />

      <div>
        <img src="" />
        Download App
      </div>
      <div>Become a Supplier</div>
      <div>
        <img src="" />
        <span>Profile</span>
      </div>
      <div>
        <img src="" />
        <span>Cart</span>
        <span className="cart-value">{props.count}</span>
      </div>
    </nav>
  );
};

export default Header;
