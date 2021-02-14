import React from "react";
import "./Header.css";
import Logo from "./../../images/Logo.png";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <IconButton style={{ color: "#E1373D" }}>
        <InfoIcon style={{ fontSize: 40 }} className="header_icon" />
      </IconButton>
      <img className="header_logo" src={Logo} alt="" />
      <IconButton style={{ color: "#E1373D" }}>
        <AccountCircleIcon style={{ fontSize: 40 }} className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
