const About = () => {
  return (
    // About Page
    <div className='flex flex-auto self-center flex-col items-center max-w-5xl pb-20 mx-5 gap-13'>
      <span className='font-semibold text-6xl self-start'>About us</span>

      {/* card */}
      <div className="flex flex-wrap justify-center items-center gap-x-15 gap-y-8 pb-10">

        <div className="flex-[1_0_280px] aspect-[16/9] overflow-hidden">
          <img className='rounded-md w-full h-full object-cover' src="/about-2.jpg" alt="picture" />
        </div>
        <div className='flex-[1_0_280px] flex flex-col gap-5'>
          <div className='font-semibold lg:text-4xl text-3xl'>What is Inefan?</div>
          <div className="text-lg">Inefan (Independent Economic & Financial Analysis) is a non-profit association founded by a group of students and graduates from the Department of Economics at Aristotle University of Thessaloniki.</div>
        </div>

      </div>

      <div className="flex flex-wrap-reverse justify-center items-center gap-x-15 gap-y-8">

        <div className='flex-[1_0_280px] flex flex-col gap-5'>
          <div className='font-semibold lg:text-4xl text-3xl'>What we do:</div>

          <ul className="text-lg list-disc pl-5">
            <li>We organize seminars and conferences on economic topics.</li>
            <li>We write articles about the financial sector and entrepreneurship.</li>
            <li>We conduct educational visits to businesses.</li>
            <li>We aim to connect young people with economic science and the job market.</li>
          </ul>

        </div>
        <div className="flex-[1_0_280px] aspect-[4/3] overflow-hidden">
          <img className='rounded-md size-full object-cover' src="/about-4.jpg" alt="picture" />
        </div>

      </div>

    </div>
  )
}

export default About
