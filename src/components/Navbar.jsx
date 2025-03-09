import Navlink from "./Navlink";
import { Link } from "react-router-dom";
import { links } from "../data/siteMap";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const burgerIconLightRef = useRef(null); // Initialize with null
  const burgerIconDarkRef = useRef(null); // Initialize with null
  const burgerMenuRef = useRef(null); // Initialize with null

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (burgerIconLightRef.current && // Check if element is available
        burgerIconDarkRef.current) && // Check if element is available
        burgerMenuRef.current && // Check if element is available

        (!burgerIconLightRef.current.contains(e.target) &&
        !burgerIconDarkRef.current.contains(e.target)) &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setShowBurgerMenu(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array means this runs only once after the initial render

  return (
    <nav className="bg-stone-50/80 backdrop-blur-xl dark:bg-stone-900/80 fixed z-10 top-0 left-0 flex flex-col items-center w-full border-b dark:border-b-stone-800 border-b-stone-200 px-5">

      {/* Container */}
      <div className="py-1 flex max-w-5xl justify-between items-center w-full gap-5">

        {/* 1. Logo */}
        <Link to="/" className="">

          {/* 1.1 Light Logo */}
          <img
            className="hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out py-2 cursor-pointer team2:max-w-28 max-w-22 block dark:hidden"
            src="/inefanLogo-light.png"
            alt="inefan logo"
            title="Homepage"
          ></img>

          {/* 1.2 Dark Logo */}
          <img
            className="hover:drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-100 ease-in-out py-2 cursor-pointer team2:max-w-28 max-w-22 hidden dark:block"
            src="/inefanLogo-dark.png"
            alt="inefan logo"
            title="Homepage"
          ></img>
        </Link>

        {/* 2. Horizontal Navigation Bar  */}
        <div className="hidden team2:flex w-fit justify-end items-center text-sm">
          {links.map((link) => (
            <Link key={link.key} className="ml-6 flex justify-end" to={link.to}>
              <Navlink name={link.pageName} />
            </Link>
          ))}
        </div>

        {/* 3. Bars Icon */}
        <div className="w-full team2:hidden flex justify-end items-center">
          <img
            src="/menu-light.svg"
            ref={burgerIconLightRef}
            className="cursor-pointer size-10 pr-5 mr-[-20px] opacity-50 hover:opacity-90 transition-all duration-100 block dark:hidden"
            onClick={() => setShowBurgerMenu((prevState) => !prevState)}
          ></img>
          <img
            src="/menu-dark.svg"
            ref={burgerIconDarkRef}
            className="cursor-pointer size-10 pr-5 mr-[-20px] opacity-70 hover:opacity-100 transition-all duration-100 hidden dark:block"
            onClick={() => setShowBurgerMenu((prevState) => !prevState)}
          ></img>
        </div>
      </div>

      {/* Mobile/Vertical Navigation Bar */}
      <div
        ref={burgerMenuRef}
        className={`transition-all flex-col w-full max-w-5xl py-3 text-xl ${showBurgerMenu ? "flex" : "hidden"}`}
      >
        {links.map((link) => (
          <Link
            key={link.key}
            className="cursor-pointer group flex w-full justify-end"
            to={link.to}
            onClick={() => setShowBurgerMenu(false)}
          >
            <Navlink name={link.pageName} />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
