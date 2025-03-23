import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { reports } from "../assets/database";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-auto justify-center items-center team2:px-5 mb-5">
      <div
        className={`grid team3:grid-cols-2 w-full gap-5 transition-opacity duration-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Become a member */}
        <div className="relative h-80 bg-stone-500 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform team3:col-span-2">
          {/* Image */}
          <img className="object-cover size-full" src="/member.jpg" alt="" />

          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
            {/* Heading */}
            <span className="team2:text-5xl text-4xl text-center font-semibold">
              Membership
            </span>
            {/* Subheading */}
            <span className="team2:text-2xl text-xl text-center">
              Expand your knowledge and skillset in economics
            </span>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <Link
                to="/membership"
                className="border border-stone-200 bg-stone-200 hover:bg-stone-100 hover:border-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer"
              >
                Learn more
              </Link>
              <Link
                to="/membership/join"
                className="border border-stone-100 bg-transparent hover:bg-stone-100 hover:text-stone-900 py-1.5 px-4 rounded-full cursor-pointer"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>

        {/* Financial Reports */}
        <div className="relative h-80 bg-stone-300 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform">
          <img className="object-cover size-full" src="/stock.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">
              Financial Reports
            </span>
            <span className="team2:text-2xl text-xl text-center">
              Weekly updates on stock market performance
            </span>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-5">
              <Link
                to="/reports"
                className="border border-stone-200 bg-stone-200 hover:bg-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer"
              >
                Learn more
              </Link>
              <a
                href={reports[0].pdf}
                className="border border-stone-100 bg-transparent hover:bg-stone-100 hover:text-stone-900 py-1.5 px-4 rounded-full cursor-pointer"
              >
                View Latest
              </a>
            </div>
          </div>
        </div>

        {/* Inefan Insights */}
        <div className="relative h-80 bg-stone-400 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform">
          <img className="object-cover size-full" src="/insights.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-default text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">
              Inefan Insights
            </span>
            <span className="team2:text-2xl text-xl text-center">
              Thought provoking articles by our editorial team
            </span>
            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <Link
                to="/insights"
                className="border border-stone-200 bg-stone-200 hover:bg-stone-100 hover:border-stone-100 text-stone-900 py-1.5 px-4 rounded-full cursor-pointer"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
