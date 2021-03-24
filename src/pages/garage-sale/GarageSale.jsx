import React from "react";
import GarageSaleMap from "./../../GarageSaleMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";

function GarageSale() {
  return (
    <div className="">
      <Header />
      <div>
        <GarageSaleMap></GarageSaleMap>
        <div className="inner">
          <form>
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GarageSale;
