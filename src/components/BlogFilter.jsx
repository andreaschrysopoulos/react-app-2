import React from 'react'
import { useState } from 'react'

const BlogFilter = ({ selected, setSelected }) => {

  const toggleCategory = (category) => {
    setSelected(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  const isToggled = (category) => {
    return selected.includes(category) ? 'bg-stone-300 dark:bg-stone-800' : 'bg-stone-200 dark:bg-stone-900 hover:bg-stone-300 dark:hover:bg-stone-800'
  }

  return (
    <div className='flex gap-2 overflow-x-auto items-center justify-between'>
      <div className="flex gap-2 items-center dark:bg-stone-900 bg-stone-200 py-1.5 px-2 rounded-full">

        <div className={`${isToggled('ECONOMICS')} border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("ECONOMICS")}>Economics</div>
        <div className={`${isToggled('INTERNATIONAL')} border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("INTERNATIONAL")}>International</div>
        <div className={`${isToggled('FINANCIAL')} border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("FINANCIAL")}>Financial</div>
        <div className={`${isToggled('BUSINESS')} border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("BUSINESS")}>Business</div>
        {
          selected.length ? <div className='cursor-pointer px-2 opacity-40 hover:opacity-80 dark:opacity-50 dark:hover:opacity-90 text-sm transition-opacity duration-200' onClick={() => setSelected([])}>Clear</div> : ""
        }
      </div>
      <input className='transition-all duration-200 ease-in-out text-sm bg-stone-200 dark:bg-stone-900 rounded-full px-3.5 py-1.5  border-stone-800 focus:outline-0 focus:dark:bg-stone-800 focus:bg-stone-300' type="text" placeholder='Search' />
    </div>

  )
}

export default BlogFilter