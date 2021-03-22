import React from "react";
import Maps from "./../../Maps";
import Header from "./../menu/Header";
import SplitScreen from "./../../css/SplitScreen"

function Callup() {
  return (
    <div className="">
      <Header />
      <SplitScreen
        leftPane={(
          <div>
            <h1>this is a test</h1>
          </div>
        )}
        rightPane={(
          <div>
            <Maps />
          </div>
        )}
      />
    </div>
  );
}

export default Callup;
