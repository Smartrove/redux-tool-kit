import React from "react";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  //use the useSelector to output the amount value
  //first method
  //   const amount = useSelector((store) => store.cart.amount);
  //second method
  const { amount } = useSelector((store) => store.cart );//the cart is the slice name
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <Badge badgeContent={amount} color="primary">
          <LocalMallIcon color="action" />
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
