import React from 'react'

const CardTeamMemeber = ({ name, role, bio, img, linkedin }) => {
  return (
    // Link
    <a href={linkedin} target='_blank'>

      {/* Container */}
      <div className='flex flex-col h-full max-w-70 min-w-70 rounded-2xl bg-stone-200 dark:bg-stone-900 transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[1.01]'>

        {/* Photo */}
        <img className='h-80 object-cover rounded-tl-2xl rounded-tr-2xl' src={img} alt="photo" />

        {/* Info Container */}
        <div className="m-5 flex flex-col">
          {/* Role */}  <span className='font-medium dark:text-stone-300 text-stone-900'>{role}</span>
          {/* Name */}  <span className='text-3xl font-semibold mb-4'>{name}</span>
          {/* Bio */}   <div className='text-sm dark:text-stone-100 text-stone-900'>{bio}</div>
        </div>

      </div>
    </a>
  )
}

export default CardTeamMemeber 