import React, { useEffect, useState } from "react";
import logo from "../Images/Logo.png";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2011/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <h2>Latest Posts</h2>
      <div className="posts flex items-center justify-between gap-[20px]">
        {posts.map((e) => (
          <div className="post-card" key={e.id}>
            <span className="text-[18px] font-extralight text-white py-[2px] px-[8px]  bg-[#FF6543] ">
              {e.category}
            </span>
            <img className="max-w-[330px]" src={e.img} alt="" />
            <h4 className="max-w-[330px] text-[22px] font-extralight">
              {e.name}
            </h4>
            <p className="max-w-[330px] text-[19px] font-extralight">
              {e.info}
            </p>
            <button>Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
