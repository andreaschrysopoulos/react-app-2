const Newsletter = () => {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-sm w-full">
      <span className="team2:text-2xl text-xl font-semibold w-full text-center min-w-[270px] text-stone-100">
        Subscribe to our newsletter!
      </span>
      <form
        action=""
        className="transition-shadow duration-200 mt-2 border dark:border-blue-700 border-blue-50 rounded-md flex w-full hover:shadow-lg focus-within:shadow-lg min-w-[278px]"
      >
        <input
          id="email"
          className="w-full py-2 px-3 outline-0 border-r dark:border-blue-700 border-blue-50 text-stone-100"
          type="email"
          autoComplete="email"
          required
        />
        <button
          className="cursor-pointer w-25 py-2 px-3 rounded-tr-[4.8px] rounded-br-[4.8px] dark:bg-blue-700 dark:hover:bg-blue-600 bg-blue-50 hover:bg-blue-100 font-medium transition-all duration-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
