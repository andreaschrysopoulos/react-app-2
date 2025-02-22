import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({ name }) => {

  return (
    <span className="w-max text-end py-2 cursor-pointer dark:text-white/90 transition-all duration-150 ease-in-out
    hover:dark:text-white
    hover:dark:[text-shadow:0px_0px_15px_rgb(255,255,255)]
    hover:[text-shadow:0px_0px_20px_rgba(0,0,0,0.4)]

    group-hover:[text-shadow:0px_0px_20px_rgba(0,0,0,0.4)]
    group-hover:dark:[text-shadow:0px_0px_15px_rgb(255,255,255)]
    group-hover:dark:text-white
    ">
      {name}
    </span>
  )
}

export default Navlink