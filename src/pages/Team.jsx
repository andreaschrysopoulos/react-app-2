import CardTeamMember from "../components/CardTeamMember";
import { members } from "../assets/database";

const Team = () => {
  return (
    <>
      <div className="flex flex-auto gap-8 dark:text-white pb-20 px-5">
        <div className="flex flex-col gap-10 mx-auto max-w-6xl">

          {/* Page Header */}
          <span className="text-6xl font-semibold pb-3 dark:text-white self-start w-min team2:w-full">
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
