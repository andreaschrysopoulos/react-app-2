import Articles from "./Articles"

const About = () => {
  return (
    <div className='flex flex-auto flex-col items-center justify-center px-5 pb-8 mb-20'>
      <div className="flex flex-col max-w-5xl mx-auto">

        {/* Main Title */}
        <span className='font-semibold text-7xl mb-6 mt-20 text-center'>Independent Economic & Financial Analysis</span>

        {/* Subtitle */}
        <span className='text-2xl mb-50 dark:text-stone-400 text-stone-500 max-w-3xl self-center text-center'>
          <div className="text-stone-100">Inefan (Independent Economic & Financial Analysis) is a non-profit association founded by a group of students and graduates from the Department of Economics at Aristotle University of Thessaloniki.</div>
          <div className="mt-10">Since then, our association has evolved, incorporating a significant number of students and interested individuals while expanding its activities into various sectors that characterize the labor market.</div>
        </span>

        <span className="text-7xl font-semibold text-center mb-15">Since 2018 we've had</span>
        <div className="flex justify-center mb-50 gap-15 text-center">
          <div>
            <div className="text-5xl font-medium">110</div>
            <div className="text-2xl dark:text-stone-400">Editors</div>
          </div>
          <div>
            <div className="text-5xl font-medium">280</div>
            <div className="text-2xl dark:text-stone-400">Published Articles</div>
          </div>
          <div>
            <div className="text-5xl font-medium">38</div>
            <div className="text-2xl dark:text-stone-400">Events</div>
          </div>
          <div>
            <div className="text-5xl font-medium">8.000+</div>
            <div className="text-2xl dark:text-stone-400">Participants</div>
          </div>

        </div>

        {/* Second Title */}
        <span className='font-semibold text-8xl mb-20 text-center'>Pathways to impact</span>

        {/* Grid */}
        <div className="grid gap-20 wrap">

          {/* Card */}
          <div className="group relative transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.01] hover:will-change-transform h-150">
            {/* Image */}
            <img src="/about-6.jpg" alt="Backdrop" className="size-full object-cover saturate-150" />

            {/* Blur div */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs group-hover:backdrop-blur-sm transition-normal duration-300"></div>

            {/* Text div */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
              <p className="p-10 text-6xl font-semibold text-center text-stone-100">Our members join thematic groups and gain hands-on experience in their chosen field of interest.
              </p>
            </div>

          </div>


          {/* Card */}
          <div className="group relative transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.01] hover:will-change-transform h-150">
            {/* Image */}
            <img src="/about-4.jpg" alt="Backdrop" className="size-full object-cover saturate-150" />

            {/* Blur div */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs group-hover:backdrop-blur-sm transition-normal duration-300"></div>

            {/* Text div */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
              <p className="p-10 text-6xl font-semibold text-center text-stone-100">We write articles about the financial sector and entrepreneurship.
              </p>
            </div>

          </div>


          {/* Card */}
          <div className="group relative transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.01] hover:will-change-transform h-150">
            {/* Image */}
            <img src="/about-5.jpg" alt="Backdrop" className="size-full object-cover saturate-150" />

            {/* Blur div */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs group-hover:backdrop-blur-sm transition-normal duration-300"></div>

            {/* Text div */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
              <p className="p-10 text-6xl font-semibold text-center text-stone-100">We organize multidisciplinary seminars and workshops with a focus on the economic sector.
              </p>
            </div>

          </div>


          {/* Card */}
          <div className="group relative transition-all duration-300 ease-in-out cursor-pointer rounded-2xl overflow-hidden hover:scale-[1.01] hover:will-change-transform h-150">
            {/* Image */}
            <img src="/about-1.jpg" alt="Backdrop" className="size-full object-cover saturate-150" />

            {/* Blur div */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs group-hover:backdrop-blur-sm transition-normal duration-300"></div>

            {/* Text div */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
              <p className="p-10 text-6xl font-semibold text-center text-stone-100">Our goal is to connect young people with economic science and the job market through our collaborations with key players in the business world.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About