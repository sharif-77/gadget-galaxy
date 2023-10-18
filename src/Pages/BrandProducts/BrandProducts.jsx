import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
    const {brand}=useParams()
    const lowerBrand=brand.toLowerCase()
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(allData=>{
            const filteredData=allData.filter(product=>product.brandName==lowerBrand)
            console.log(filteredData);
            setProducts(filteredData)
        })
    },[lowerBrand])
 

    


    return (
        <div >

            <div className="w-4/5 mx-auto my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    products.map(product=><BrandProduct key={product._id}  product={product}/>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default BrandProducts;