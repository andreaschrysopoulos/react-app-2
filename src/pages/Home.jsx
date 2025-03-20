import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  return (
    <div className="flex flex-auto justify-center items-center team2:px-5 mb-5">
      <div className={`opacity-0 grid team3:grid-cols-2 w-full gap-5 transition-opacity duration-400 ${isLoaded && "opacity-100"}`}>

        {/* Item 1 */}
        <Link className="relative h-80 bg-stone-300 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform" to="/reports">
          <img className="object-cover size-full" src="/stock.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-pointer text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">Weekly Financial Reports</span>
            <span className="team2:text-2xl text-xl text-center">Up-to-date stock market performance.</span>
          </div>
        </Link>

        {/* Item 2 */}
        <Link className="relative h-80 bg-stone-400 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform" to="/insights">
          <img className="object-cover size-full" src="/insights.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-pointer text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">Insights</span>
            <span className="team2:text-2xl text-xl text-center">Thought provoking articles by our editorial team.</span>
          </div>
        </Link>

        {/* Item 3 */}
        <Link className="relative h-80 bg-stone-500 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform" to="">
          <img className="object-cover size-full" src="/member.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-pointer text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">Become a volunteer!</span>
            <span className="team2:text-2xl text-xl text-center">Expand your knowledge and skillset in economics.</span>
          </div>
        </Link>

        {/* Item 4 */}
        <Link className="relative h-80 bg-stone-600 team2:hover:scale-[1.01] transition-transform duration-300 ease-in-out will-change-transform" to="/team">
          <img className="object-cover size-full" src="/about-1.jpg" alt="" />
          <div className="absolute top-0 left-0 size-full p-10 flex flex-col gap-2 justify-center items-center transition-all duration-300 ease-in-out hover:backdrop-brightness-110 cursor-pointer text-white backdrop-blur-xs">
            <span className="team2:text-5xl text-4xl text-center font-semibold">Inefan Leadership</span>
            <span className="team2:text-2xl text-xl text-center">Meet this year's executive board.</span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
