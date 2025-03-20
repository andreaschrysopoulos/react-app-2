import CardTeamMember from "../components/PersonCard";
import { members } from "../assets/database";
import { useEffect, useState } from "react";

const Team = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  return (
    <>
      <div className="flex flex-auto pb-20 px-5 relative">
        <div className={`flex flex-col mx-auto max-w-5xl w-min`}>

          <div className={`flex flex-col transition-all duration-400 ${isLoaded ? "opacity-110" : "translate-y-4 opacity-0"}`}>
            <span className={`font-semibold team3:text-6xl text-5xl mb-2`}>Inefan Board</span>
            <span className={`font team3:text-3xl text-2xl mb-10 dark:text-stone-400 text-stone-600`}>The Board of Directors at Inefan leads with diverse expertise in economics, finance, and entrepreneurship, guiding our mission to connect youth with education and career opportunities.</span>
          </div>

          {/* Board */}
          <div className={`grid gap-10 grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 self-center min-w-70 team2:min-w-168 team3:min-w-258 transition-opacity duration-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            {members.map((member) => (
              <CardTeamMember
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
      </div>
    </>
  );
};

export default Team;