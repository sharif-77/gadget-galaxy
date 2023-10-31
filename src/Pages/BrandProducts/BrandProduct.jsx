
import { Link } from "react-router-dom";

const BrandProduct = ({product}) => {
    const {_id,image,name,description}=product
  return (

    <div>
      <div className="card card-compact  bg-base-100 shadow-xl text-black">
        <figure>
          <img
          className="min-h-[300px] max-h-[300px] "
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className= "card-title">{name}</h2>
          <p className= "min-h-[100px]">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}  className="btn btn-primary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
