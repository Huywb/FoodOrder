import React, { useState } from "react";
import "./navbar.css";
import { asset } from "../../assets/assets.js";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/index.jsx";

const Navbar = () => {
  const dispatch = useDispatch()
  const CartItem = useSelector((state)=>state.data.cart)
  const [menu, setMenu] = useState("home");
  const user = useSelector((state)=>state.data.user)
  const handleLogout = ()=>{
    dispatch(setLogout())
  }
  return (
    <div className="navbar">
      <img src={asset.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <a href="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </a>
        <a href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={asset.search_icon} alt="" />
        <div className="navbar-search-icon">
         <img src={asset.basket_icon} alt=""  />
          <div className={CartItem? "dot" : ""}></div>
        </div>
        {user? (
          <div className="navbar-profile">
            <img src={asset.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li><img src={asset.bag_icon} alt="" /><a href="/myorders">Orders</a></li>
              <hr />
              <li onClick={()=>handleLogout()}> <img src={asset.logout_icon} alt="" />Logout</li>
            </ul>
          </div>
        ) : 
        (
        <button><a href="/login">Sign in</a></button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
