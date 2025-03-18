import CardTeamMember from "../components/PersonCard";
import { members } from "../assets/database";

const Team = () => {
  return (
    <>
      <div className="flex flex-auto pb-20 px-5">
        <div className="flex flex-col mx-auto max-w-5xl w-min">

          <span className='font-semibold text-6xl mb-2'>Inefan Board</span>
          <span className='font text-3xl mb-10 dark:text-stone-400 text-stone-500'>The Board of Directors at Inefan leads with diverse expertise in economics, finance, and entrepreneurship, guiding our mission to connect youth with education and career opportunities.</span>

          {/* Members */}
          <div className="grid gap-10 grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 self-center min-w-70 team2:min-w-166 team3:min-w-255">
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