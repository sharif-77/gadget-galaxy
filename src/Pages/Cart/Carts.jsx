import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Carts = () => {
    const[cartImtems,setCartItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/carts')
        .then(res=>res.json())
        .then(res=>setCartItems(res))
    },[])
    return (
        <div className="w-4/5 mx-auto my-20 mb-60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    cartImtems.map(item=><CartItem key={item._id} product={item} cartImtems={cartImtems} setCartItems={setCartItems} />)
                }
            </div>
            
        </div>
    );
};

export default Carts;