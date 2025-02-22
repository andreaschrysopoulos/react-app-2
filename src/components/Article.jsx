import React from 'react'

const Article = ({ category, title, date, picture }) => {
  return (
    <a href="" className='cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-in-out max-w-70 w-70 h-full'>

      {/* Container */}
      <div className='flex flex-col h-full rounded-4xl bg-white dark:bg-stone-900'>

        {/* 1. Photo */}
        <img className='h-43 min-h-43 object-cover rounded-tl-4xl rounded-tr-4xl' src={picture}/>


        {/* 2. Description */}
        <div className="flex flex-col px-8 py-5 h-full">
          <span className='w-fit font-semibold text-sm dark:text-stone-400 text-stone-500'>{category}</span>
          <span className='w-fit font-semibold dark:text-white text-2xl pt-1'>{title}</span>
          <span className='w-fit font-medium pt-3 mt-auto dark:text-stone-400 text-stone-500'>{date}</span>
        </div>

      </div>

    </a>
  )
}

export default Article