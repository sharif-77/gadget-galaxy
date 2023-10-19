import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Carts = () => {
  const [loading, setLoading] = useState(true);
  const [cartImtems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("https://gadget-galaxy-server-nine.vercel.app/carts")
      .then((res) => res.json())
      .then((res) => {
        setCartItems(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mb-10 font-bold">Data is loading....</p>;
  }

  return (
    <div className="w-4/5 mx-auto my-20 mb-60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cartImtems.map((item) => (
          <CartItem
            key={item._id}
            product={item}
            cartImtems={cartImtems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div>
        {cartImtems.length == 0 && (
          <p className="text-center text-3xl font-bold"> Nothing in cart</p>
        )}
      </div>
    </div>
  );
};

export default Carts;
