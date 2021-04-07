import React from "react";
import "./Header.css";
import Logo from "./../../images/Logo.png";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import Navbar from "./../../Navbar";
import { signOut } from '../../store/auth/signOut';
import { useDispatch } from 'redux-react-hook';

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Navbar />
      {/* <Link style={{ textDecoration: "none", color: "black" }} to={"/info"}>
        <IconButton style={{ color: "#E1373D" }}>
          <InfoIcon style={{ fontSize: 40 }} className="header_icon" />
        </IconButton>
      </Link> */}

      <img className="header_logo" src={Logo} alt="" />
      <div id="list-item"> 
      <Link style={{ textDecoration: "none", color: "black" }} to={"/profile"}>
        <IconButton style={{ color: "#E1373D" }}>
          <AccountCircleIcon style={{ fontSize: 40 }} className="header_icon" />
        </IconButton>
      </Link>
      <p>
      <Link to="/sign-in">Logout</Link>
</p>
</div>
    </div>
  );
}

export default Header;
