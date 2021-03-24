import React from "react";
import CallupMap from "../../CallupMap";
import Header from "./../menu/Header";
import "./../../css/SearchInput.css";

function Callup() {
  return (
    <div className="">
      <Header />
      <div>
        <CallupMap></CallupMap>
        <div className="inner">
          <form>
            <input type="text" name="search" placeholder="Search.." />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Callup;
