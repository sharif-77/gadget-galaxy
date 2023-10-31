import { useContext, useState } from "react";
import { useEffect } from "react";
import Brand from "./Brand";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const Brands = () => {
  // const { mode } = useContext(AuthContext);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://gadget-galaxy-server-nine.vercel.app/brands")
      .then((res) => res.json())
      .then((res) => setBrands(res));
  }, []);
  return (
    <div className="w-4/5 mx-auto my-10">
      <p
        className="my-10 text-center text-3xl font-bold  dark:text-white "
      >
        Chose Your Favorite Brand
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
