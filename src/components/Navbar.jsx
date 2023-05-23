import React from "react";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

const Navbar = () => {
  //use the useSelector to output the amount value
  //first method
  //   const amount = useSelector((store) => store.cart.amount);
  //second method
  const { amount } = useSelector((store) => store.cart); //the cart is the slice name
  return (
    <nav>
      <div className="nav-center">
        <Link to="/" className="logo">
          Smartrove Shop
        </Link>
        <Badge badgeContent={amount} color="primary">
          <LocalMallIcon color="action" />
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
