import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { useContext } from "react";

const ProductDetails = () => {
  const {user}=useContext(AuthContext)
  const email=user?.email
  const product = useLoaderData();

  const {_id, name, image, brandName, productType, price, description, ratting } =
    product;

  const forCart = { name, image, price,email };

  const handleAddToCart = () => {
    fetch("https://gadget-galaxy-server-nine.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(forCart),
    })
      .then((res) => res.json())
      .then(() => toast.success(`Added to Cart`));
  };

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="card  bg-base-100 shadow-xl text-black">
        <figure>
          <img className="max-h-[400px]" src={image} alt="image" />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Name : {name}</h2>
          <h2 className="text-2xl font-bold">Price : ${price}</h2>
          <h2 className="text-xl font-bold">Brand : {brandName}</h2>
          <p className="text-lg">{description}</p>
          <p className="text-lg uppercase font-bold text-green-500">
            It will be great decision to purchase this{" "}
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-success text-white font-bold"
            >
              Add To Cart
            </button>
            <Link to={`/update/${_id}`} className="btn btn-primary">Update Product</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
