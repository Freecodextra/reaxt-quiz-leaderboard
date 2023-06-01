import React from 'react'
import "./footer.css"
import Logo from "../assets/cele-logo.jpg"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-text">
            <p>www.ccchanwa.com</p>
            <p>Hanwa Parish 1, Zaria</p>
        </div>
        <div className="footer-image">
          <img src={Logo} alt="cele-logo" />
        </div>
    </div>
  )
}

export default Footer