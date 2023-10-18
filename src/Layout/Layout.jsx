import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
