import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import AddProducts from "../Pages/AddProducts/AddProducts";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addProducts',
                element:<AddProducts/>
            },
            {
                path:'/brandProducts/:brand',
                element:<BrandProducts/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]

    }
])

export default router;