import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <h4>Welcome to our webpage</h4>
      <p>To view our cart, click the get started button.</p>
      <button className="link-button">
        <Link to="/cart" className="get-started">
          Get Started
        </Link>
      </button>
    </div>
  );
};

export default Home;
