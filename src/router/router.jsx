import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';
import AddProducts from "../Pages/AddProducts/AddProducts";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Carts from "../Pages/Cart/Carts";

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
                element:<PrivetRoute><AddProducts/></PrivetRoute>
            },
            {
                path:'/brandProducts/:brand',
                element:<BrandProducts/>
            },
            {
                path:'/cart',
                element:<PrivetRoute><Carts/></PrivetRoute>
            },
            {
                path:'/details/:id',
                element:<PrivetRoute><ProductDetails/></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
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