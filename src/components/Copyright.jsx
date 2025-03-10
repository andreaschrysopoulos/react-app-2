import Breadcrums from "./Breadcrums";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full dark:bg-yellow-600 bg-yellow-500 px-5 text-stone-100">
      <div className="py-2.5 flex flex-wrap justify-between max-w-5xl w-full items-center text-sm gap-2">
        <div className="flex-1 pr-10">
          <Breadcrums />
        </div>
        <span className="min-w-max">&copy; 2025 Inefan</span>
      </div>
    </footer>
  );
};

export default Footer;
