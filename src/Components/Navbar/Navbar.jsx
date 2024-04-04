import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState("");
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <h1>SHOPPER HUB</h1>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setActiveMenu("Shop")}}><Link style={{textDecoration: 'none' }} to='/'>Shop</Link> {activeMenu === "Shop" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Men")}}><Link style={{textDecoration: 'none' }} to='/mens'>Men</Link> {activeMenu === "Men" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Women")}}><Link style={{textDecoration: 'none' }} to='/womens'>Women</Link> {activeMenu === "Women" ? <hr /> : <></>}</li>
            <li onClick={()=>{setActiveMenu("Kids")}}><Link style={{textDecoration: 'none' }} to='/kids'>Kids</Link>{activeMenu === "Kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar