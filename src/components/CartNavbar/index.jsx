import React, { useState } from "react";

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";

const CartNavbar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={`hidden md:flex flex-col absolute  shadow-xl left-0 bg-[#ffffff] w-full mx-auto z-40  h-[300px] justify-between items-center duration-300 transition-all py-4 ${isMenuOpen ? 'top-20' : '-top-[500%]'}`}>
        <Link className="text-xl" to="/">Home</Link>
        <Link className="text-xl" to="/shop">Shop</Link>
        <Link className="text-xl" to="/blog">Blog</Link>
        <Link className="text-xl" to="/aboutus">About Us</Link>
        <Link className="text-xl" to="/contactus">Contact Us</Link>
        <Link className="text-xl" to="/team">Team</Link>
      </div>
      <div className="w-full h-[100px] flex items-center  sm:px-2 px-10 sticky bg-[#ffffff] z-50 top-0">



        <div className="flex flex-row  items-center justify-between w-full">
          <Link to='/'>
            <Img
              className="h-[30px] w-[90px]"
              src="images/img_car.svg"
              alt="car"
            />
          </Link>
          <div className="flex sm:flex-1 flex-row  sm:hidden items-center   justify-between gap-14 mx-auto sm:w-full">

            <Link to='/'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Home
              </Text>
            </Link>
            <Link to='/shop'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Shop
              </Text>
            </Link>
            <Link to='/blog'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Blog
              </Text>
            </Link>
            <Link to='/aboutus'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                About
              </Text>
            </Link>
            <Link to='/contactus'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Contact
              </Text>
            </Link>
            <Link to='/team'>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Team
              </Text>
            </Link>

          </div>
          <div className="flex gap-5">
            <Link to='/cart'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>

            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </Link>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </Link>
            <div onClick={toggleMenu}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>

          </div>


        </div>


      </div>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
