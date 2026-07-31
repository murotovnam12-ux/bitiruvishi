import React from 'react'
import logo from '../Images/Logo.png'
function Header() {
  return (
    <div>
        <header>
            <div>
                <span>Need help? Call us 112233344455</span>
                <span>Summer sale discount off 60% off! Shop Now</span>
                <span>2-3 business days delivery & free returns</span>
            </div>
            <div>
                <img src={logo} alt="" />
                <div className=""></div>
            </div>
        </header>
    </div>
  )
}

export default Header