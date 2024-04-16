import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    
    <div className="fixed w-full bg-navbarcolor">
      <div className="flex flex-row justify-between p-3 md:px-32 px-3 bg-navbarcolor shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <h1 className="text-xl font-semibold text-white">AT DIGITAL</h1>
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 text-white ">
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="careers"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Careers
          </Link>
        </nav>
        <div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          style={{ height: '700px' }} 
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Services
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About Us
          </Link>

          <Link
            to="careers"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Careers
          </Link>
        </div>
      </div>
    </div>
    
    
  );
};

export default Navbar;
