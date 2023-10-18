import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
    return (
        <div className=" p-5">
         
          <nav className="flex flex-col lg:flex-row justify-between items-center gap-10  ">

            <div className="flex gap-5 items-center  ">
                <img className="w-20 rounded-full" src="https://i.ibb.co/93qM2hD/download.jpg" alt="logo" />
                <span className="text-xl font-bold hidden lg:block">Gadget Galaxy</span>

            </div>
            
            <div className="flex items-center gap-5 ">
                    <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Home</NavLink>
                    <NavLink to='/addProduct' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white  `} py-2 px-5 rounded-md font-bold`}>Ad product </NavLink>
                    <NavLink to='/cart' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold `}>Cart</NavLink>
                 
                    
            </div>

            <div className="flex items-center justify-center gap-5  ">
                <span className="font-bold">{user?.displayName&&user.displayName}</span>

                <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL?user?.photoURL:"https://i.ibb.co/s2hVRQm/user.png"} />
                    {/* <img src="https://i.ibb.co/s2hVRQm/user.png" /> */}
                </div>
                </div>
                
                <div>
                    {
                        user?<NavLink  className="  hover:bg-[#220032] hover:text-white  py-2 px-5 rounded-md font-bold">Logout</NavLink>:  <NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold`}>Login</NavLink>
                    }
                </div>

                
                
              
                
            </div>
            
          </nav>
        </div>
    );
};

export default Navbar;