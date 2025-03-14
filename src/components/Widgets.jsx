import Newsletter from "./Newsletter";

const Widgets = () => {
  return (
    <div className="flex justify-center w-full dark:bg-blue-950 bg-blue-500 px-5">
      <div className="max-w-5xl flex justify-center py-7 mb-4 text-sm w-full">
        <Newsletter />
      </div>
    </div>
  );
};

export default Widgets;
