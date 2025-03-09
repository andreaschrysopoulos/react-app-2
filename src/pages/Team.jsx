import CardTeamMember from "../components/PersonCard";
import { members } from "../assets/database";

const Team = () => {
  return (
    <>
      <div className="flex flex-auto pb-20 px-5">
        <div className="flex flex-col mx-auto max-w-5xl">

          {/* Page Header */}
          {/* <span className="team3:text-5xl text-5xl font-semibold pb-3 mb-5 self-start w-min team2:w-full">
            Board of Directors
          </span> */}

          <span className='font-semibold text-6xl mb-2 text-red-500'>Inefan Board</span>
          <span className='font-medium text-3xl mb-10'>The Board of Directors at Inefan leads with diverse expertise in economics, finance, and entrepreneurship, guiding our mission to connect youth with education and career opportunities.</span>

          {/* Members */}
          <div className="grid gap-10 grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 self-center">
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