import CardTeamMember from "../components/PersonCard";
import { members } from "../assets/database";

const Team = () => {
  return (
    <>
      <div className="flex flex-auto dark:text-white pb-20 px-5">
        <div className="flex flex-col gap-8 mx-auto max-w-6xl">

          {/* Page Header */}
          <span className="team3:text-6xl text-5xl font-semibold pb-3 dark:text-white self-start w-min team2:w-full">
            Board of Directors
          </span>

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
