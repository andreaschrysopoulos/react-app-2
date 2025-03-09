const About = () => {
  return (
    <div className='flex flex-auto self-center flex-col items-center px-5 pb-8'>
      <div className="flex flex-col max-w-5xl gap-5">

        {/* What is Inefan */}
        <div className="flex bg-stone-900 rounded-3xl w-full">

          {/* Text */}
          <div className='flex flex-6 flex-col px-10 py-8 size-fit'>
            <div className='font-semibold lg:text-6xl text-4xl mb-5'>What is Inefan</div>
            <div className="lg:text-xl text-lg">Inefan (Independent Economic & Financial Analysis) is a non-profit association founded by a group of students and graduates from the Department of Economics at Aristotle University of Thessaloniki.</div>
          </div>

          {/*
          <div className="flex flex-5">
            <img className='rounded-tr-2xl rounded-br-2xl size-full object-cover' src="/about-2.jpg" alt="picture" />
          </div> */}

        </div>


        {/* What we do */}
        <div className="flex bg-stone-900 rounded-3xl w-full">

          {/* Image */}
          {/* <div className="flex flex-5">
            <img className='rounded-tl-2xl rounded-bl-2xl size-full object-cover' src="/about-4.jpg" alt="picture" />
          </div> */}

          {/* Text */}
          <div className='flex flex-6 flex-col gap-5 px-10 py-8'>
            <div className='font-semibold lg:text-6xl text-4xl'>What we do</div>
            <ul className="lg:text-xl text-lg list-disc pl-5">
              <li>We organize seminars and conferences on economic topics.</li>
              <li>We write articles about the financial sector and entrepreneurship.</li>
              <li>We conduct educational visits to businesses.</li>
              <li>We aim to connect young people with economic science and the job market.</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  )
}

export default About
