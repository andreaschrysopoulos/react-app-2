const Home = () => {
  return (
    <div className="flex flex-auto justify-center px-5">
      <div className="flex dark:bg-stone-900 bg-stone-200 rounded-3xl max-w-5xl size-fit">

        {/* Text */}
        <div className='flex flex-6 flex-col px-10 py-8 size-fit'>
          <div className='font-semibold lg:text-6xl text-5xl mb-5'>What is Inefan</div>
          <div className="text-xl">Inefan (Independent Economic & Financial Analysis) is a non-profit association founded by a group of students and graduates from the Department of Economics at Aristotle University of Thessaloniki.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
