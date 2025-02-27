const Newsletter = () => {
  return (
    <div className="flex flex-col gap-3 justify-center h-full max-w-sm w-full">
      <span className="text-white team2:text-2xl text-xl font-semibold w-full text-center min-w-[270px]">
        Subscribe to our newsletter!
      </span>
      <form
        action=""
        className="transition-all duration-200 mt-2 border dark:border-indigo-700 border-indigo-50 rounded-md flex w-full hover:shadow-lg focus-within:shadow-lg min-w-[278px]"
      >
        <input
          id="email"
          className="text-white w-full py-2 px-3 outline-0 border-r dark:border-indigo-700 border-indigo-50"
          type="email"
          autoComplete="email"
          required
        />
        <button
          className="cursor-pointer dark:text-white w-25 py-2 px-3 rounded-tr-[4.8px] rounded-br-[4.8px] dark:bg-indigo-700 dark:hover:bg-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-medium transition-all duration-200"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
