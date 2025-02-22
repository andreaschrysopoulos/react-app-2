import React from 'react'
import CardTeamMemeber from '../components/CardTeamMemeber'
import { members } from '../assets/database'

const Team = () => {
  return (
    <>
      <div className='w-min flex flex-col flex-auto gap-8 dark:text-white pb-20 mx-5 max-w-5xl items-center'>

        {/* Page Header */}
        <span className='text-6xl font-semibold pb-3 max-w-5xl dark:text-white self-start'>Board of Directors</span>

        {/* Members */}
        <div className="w-max grid large:grid-cols-3 medium:grid-cols-2 grid-cols-1 gap-10">

          {members.map(member => (
            <CardTeamMemeber
              key={member.key}
              name={member.name}
              role={member.role}
              bio={member.bio}
              img={member.img}
              linkedin={member.linkedin}
            />
          ))}

        </div>

      </div>
    </>
  )
}

export default Team