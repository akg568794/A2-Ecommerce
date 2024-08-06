import React from 'react';
import logo from "../assest/logo.png";
import { Link } from 'react-router-dom';

const Logo = ({ w, h }) => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="logo" width={24} height={24}></img>
      <div className="hidden md:flex text-2xl tracking-wide font-semibold">
        <span className="text-red-600 font-bold">A2 </span>Ecommerce
      </div>
    </Link>
  );
};

export default Logo;
