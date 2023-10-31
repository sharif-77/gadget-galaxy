import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";


const Layout = () => {

  // const {mode}=useContext(AuthContext)
  return (
    // <div className={`${mode?`  dark:bg-black text-white dark `:''} `}>
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <Outlet />
      <Footer/>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;
