import React from "react";
import OpenHouseMap from "./../../OpenHouseMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";

function OpenHouse() {
  return (
    <div className="">
      <Header />
      <div>
        <OpenHouseMap></OpenHouseMap>
        <div className="inner">
          <form>
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default OpenHouse;
