import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <h1>SHOPPER HUB</h1>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setActiveMenu("shop")}}>Shop {activeMenu === "shop" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Men")}}>Men {activeMenu === "Men" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Women")}}>Women {activeMenu === "Women" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Kids")}}>Kids{activeMenu === "Kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar