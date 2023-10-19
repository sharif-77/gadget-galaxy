import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, image, brandName, productType, price, description, ratting } =product;
  console.log(product);

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
          className="max-h-[400px]"
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Name : {name}</h2>
          <h2 className="text-2xl font-bold">Price : ${price}</h2>
          <h2 className="text-xl font-bold">Brand : {brandName}</h2>
          <p className="text-lg">{description}</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked  />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white font-bold">Add To Cart</button>
            <button className="btn btn-primary">Update Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
