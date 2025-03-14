import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";
import Widgets from "../components/Widgets";
import { Analytics } from '@vercel/analytics/next';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Widgets />
      <Copyright />
      <Analytics />
    </>
  );
};

export default Layout;
