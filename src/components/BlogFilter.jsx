import React from 'react'
import { useState } from 'react'

const BlogFilter = ({ selected, setSelected }) => {

  const toggleCategory = (category) => {
    setSelected(prev =>
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  const isToggled = (category) => {
    return selected.includes(category) ? 'bg-stone-200' : 'bg-stone-100 hover:bg-stone-200'
  }

  return (
    <div className='flex flex-wrap gap-2 overflow-x-auto items-center'>
      <div className={`${isToggled('ECONOMICS')} border border-stone-200 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("ECONOMICS")}>Economics</div>

      <div className={`${isToggled('INTERNATIONAL')} border border-stone-200 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("INTERNATIONAL")}>International</div>

      <div className={`${isToggled('FINANCIAL')} border border-stone-200 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("FINANCIAL")}>Financial</div>

      <div className={`${isToggled('BUSINESS')} border border-stone-200 px-4 py-1 rounded-full cursor-pointer transitions-all duration-200`} onClick={() => toggleCategory("BUSINESS")}>Business</div>

      {
        selected.length ? <div className='cursor-pointer px-3 opacity-50 hover:opacity-90 text-xl transition-opacity duration-200' onClick={() => setSelected([])}>X</div> : ""
      }
    </div>

  )
}

export default BlogFilter