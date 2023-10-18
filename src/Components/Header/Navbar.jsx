import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logOutUser}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOutUser()
   
    }
    return (
        <div className="w-4/5 mx-auto py-5">
         
          <nav className="flex flex-col lg:flex-row justify-between items-center gap-10  ">

            <div className="flex flex-col md:flex-row gap-3 items-center  ">
                <img className="w-16 rounded-full" src="https://i.ibb.co/93qM2hD/download.jpg" alt="logo" />
                <span className="text-xl font-bold ">Gadget Galaxy</span>

            </div>
            
            <div className="flex items-center gap-5 ">
                    <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Home</NavLink>
                    <NavLink to='/addProducts' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white  `} py-2 px-5 rounded-md font-bold`}>Ad product </NavLink>
                    <NavLink to='/cart' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Cart</NavLink>
                 
                    
            </div>

            <div className="flex items-center justify-center gap-5  ">
                <span className="font-bold">{user?.displayName&&user.displayName}</span>

                <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL?user?.photoURL:"https://i.ibb.co/s2hVRQm/user.png"} />
                    {/* <img src="https://i.ibb.co/s2hVRQm/user.png" /> */}
                </div>
                </div>
                
                <div>
                    {
                        user?<NavLink onClick={handleLogOut}  className="  hover:bg-[#220032] hover:text-white  py-2 px-5 rounded-md font-bold">Logout</NavLink>:  <NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold`}>Login</NavLink>
                    }
                </div>

                
                
              
                
            </div>
            
          </nav>
        </div>
    );
};

export default Navbar;