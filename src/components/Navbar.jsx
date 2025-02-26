import React from 'react'
import Navlink from "./Navlink"
import { Link } from "react-router-dom"
import { links } from '../data/siteMap'
import { useState, useEffect, useRef } from 'react'

function Navbar() {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const burgerIconRef = useRef(null); // Initialize with null
  const burgerMenuRef = useRef(null); // Initialize with null

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        burgerIconRef.current && // Check if element is available
        burgerMenuRef.current && // Check if element is available
        !burgerIconRef.current.contains(e.target) &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setShowBurgerMenu(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array means this runs only once after the initial render


  return (
    <nav className='bg-stone-50/80 backdrop-blur-xl dark:bg-stone-900/80 fixed z-10 top-0 left-0 flex flex-col items-center w-full border-b dark:border-b-stone-800 border-b-stone-200 px-5 transition-all duration-200'>

      {/* Container */}
      <div className="py-1 flex max-w-5xl justify-between w-full gap-5" >

        {/* 1. Logo */}
        <Link to="/" className=''>

          {/* 1.1 Light Logo */}
          <img className="hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-in-out py-2 cursor-pointer w-28 min-w-28 block dark:hidden" src="/inefanLogo-light.png" alt="inefan logo" title="Homepage"></img>

          {/* 1.2 Dark Logo */}
          <img className="hover:drop-shadow-[0px_0px_10px_rgba(255,255,255,0.3)] transition-all duration-200 ease-in-out py-2 cursor-pointer w-28 min-w-28 hidden dark:block" src="/inefanLogo-dark.png" alt="inefan logo" title="Homepage"></img>
        </Link>

        {/* 2. Horizontal Navigation Bar  */}
        <div className="hidden medium:flex w-fit justify-end items-center text-sm">
          {links.map(link => <Link key={link.key} className="ml-6 flex justify-end" to={link.to}>
            <Navlink name={link.pageName} />
          </Link>)}
        </div>

        {/* 3. Bars Icon */}
        <div className="w-full medium:hidden flex justify-end items-center" >
          <div ref={burgerIconRef} className="fa fa-bars cursor-pointer p-3 pr-5 mr-[-20px]" onClick={() => (setShowBurgerMenu((prevState) => !prevState))}></div>
        </div>
      </div>

      {/* Mobile/Vertical Navigation Bar */}
      <div ref={burgerMenuRef} className={`transition-all flex-col w-full max-w-5xl py-3 text-xl ${showBurgerMenu ? "flex" : "hidden"}`}>
        {links.map(link => <Link key={link.key} className="cursor-pointer group flex w-full justify-end" to={link.to} onClick={() => setShowBurgerMenu(false)}>
          <Navlink name={link.pageName} />
        </Link>)}
      </div>

    </nav>
  )
}

export default Navbar