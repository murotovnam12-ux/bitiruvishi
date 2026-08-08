import React from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
function Header() {
  return (
    <div>
      <header className="max-w-[1440px] m-auto">
        <div className=" flex my-[10px]  justify-between  items-center">
          <span className="text-[##272727] font-extralight text-[18px]">
            Need help? Call us 112233344455
          </span>
          <span className="text-[##272727] font-extralight text-[18px]">
            Summer sale discount off 60% off! Shop Now
          </span>
          <span className="text-[##272727] font-extralight text-[18px]">
            2-3 business days delivery & free returns
          </span>
        </div>
        <hr />
        <div className="flex justify-between mt-[10px] items-center">
          <img className="max-[165px]" src={logo} alt="" />
          <div className=" flex gap-[30px] items-center">
            <Link
              className="text-[16px] font-light text-[#272727] hover:text-[#FF6543]"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-[16px] font-light text-[#272727] hover:text-[#FF6543]"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-[16px] font-light text-[#272727] hover:text-[#FF6543]"
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className="text-[16px] font-light text-[#272727] hover:text-[#FF6543]"
              to="/blog"
            >
              Blogs
            </Link>
            <Link
              className="text-[16px] font-light text-[#272727] hover:text-[#FF6543]"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="icons flex gap-[15px] items-center">
            <CiSearch className="text-[27px]" />
            <CiUser className="text-[27px]" />
            <CiHeart className="text-[27px]" />
            <Link to="/cart">
              <CiShoppingCart className="text-[27px]" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
