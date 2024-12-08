import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import clsx from "clsx";

const Navbar = () => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = useState(false);
  const activeLink = active === "link.title";
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-10 h-10' object-contain />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Innovatx{" "}
            <span className='sm:block hidden'>Technologies Solutions</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-raw gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={clsx(
                "hover:text-white text-[18px] font-medium cursor-pointer  transition-colors duration-500",
                activeLink ? "text-white" : "text-secondary"
              )}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile navigation bar */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/* side menu content */}
          <div
            className={clsx(
              "mobile-menu-container",
              !toggle ? "hidden" : "flex items-center justify-center"
            )}
          >
            <ul className='list-none flex flex-col justify-center items-center gap-8'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={clsx(
                    "mobile-menu-li",
                    activeLink ? "text-white" : "text-secondary"
                  )}
                  onClick={() => setToggle(!toggle)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
