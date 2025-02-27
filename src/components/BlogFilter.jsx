import React from 'react'
import { useState } from 'react'

const BlogFilter = ({ selected, setSelected }) => {

  const toggleCategory = (category) => {
    setSelected(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  const isToggled = (category) => {
    return selected.includes(category) ? 'bg-stone-200 dark:bg-stone-800' : 'bg-stone-100 dark:bg-stone-950 hover:bg-stone-200 dark:hover:bg-stone-800'
  }

  return (
    <div className='flex flex-wrap gap-2 overflow-x-auto items-center'>
      <div className={`${isToggled('ECONOMICS')} border border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("ECONOMICS")}>Economics</div>

      <div className={`${isToggled('INTERNATIONAL')} border border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("INTERNATIONAL")}>International</div>

      <div className={`${isToggled('FINANCIAL')} border border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("FINANCIAL")}>Financial</div>

      <div className={`${isToggled('BUSINESS')} border border-stone-200 dark:border-stone-800 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("BUSINESS")}>Business</div>

      {
        selected.length ? <div className='cursor-pointer px-2 opacity-40 hover:opacity-80 dark:opacity-50 dark:hover:opacity-90 dark:text-white text-sm transition-opacity duration-200' onClick={() => setSelected([])}>Clear</div> : ""
      }
    </div>

  )
}

export default BlogFilter