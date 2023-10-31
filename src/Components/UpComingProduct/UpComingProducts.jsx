import { useContext, useEffect, useState } from "react";
import UpComingProduct from "./UpComingProduct";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpComingProducts = () => {
  const { mode } = useContext(AuthContext);

  const [comingProducts, seComingProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-galaxy-server-nine.vercel.app/upcomings")
      .then((res) => res.json())
      .then((res) => seComingProducts(res));
  }, []);
  return (
    <div className="w-4/5 mx-auto my-10 ">
      <p
        className="my-10 text-center text-3xl font-bold "
      >
        Our Upcoming Products
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
        {comingProducts.map((product) => (
          <UpComingProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default UpComingProducts;
