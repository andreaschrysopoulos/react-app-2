import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Widgets from "../components/Widgets";

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Widgets />
      <Copyright />
    </>
  );
};

export default Layout;
