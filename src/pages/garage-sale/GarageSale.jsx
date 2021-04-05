import React from "react";
import GarageSaleMap from "./../../GarageSaleMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";
import "./Map.css";
import Navbar from "./../../Navbar";
import Card from "./../menu/Card";

function GarageSale() {
  return (
    <div className="mainContainer">
      <div className="headerBox">
        <Header />
      </div>
      <div className="container2">
        <GarageSaleMap />
      </div>
    </div>
  );
}

export default GarageSale;
