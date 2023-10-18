import { useState } from "react";
import { useEffect } from "react";
import Brand from "./Brand";

const Brands = () => {
    const[brands,setBrands]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(res=>setBrands(res))
    },[])
    return (
        <div className="w-4/5 mx-auto my-20">

            <p className="my-10 text-center text-3xl font-bold">Chose Your Favorite Brand</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                {brands.map(brand=><Brand key={brand._id} brand={brand} />)}
            </div>
            
        </div>
    );
};

export default Brands;