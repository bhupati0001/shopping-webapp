import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagrame_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER HUB</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagrame_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <div className='footer-text'>
                    <p>Copyright &copy; 2024 || All Rights Seserved</p>
                    <p>Made with ❤️ by <span>Bhupati Mohanta</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer