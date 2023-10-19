import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const BrandProduct = ({product}) => {
    const {_id,image,name,description}=product
    const {mode}=useContext(AuthContext)
  return (

    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
          className="min-h-[300px] max-h-[300px] "
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className={`${mode?`dark:text-black`:`text-black`} card-title`}>{name}</h2>
          <p className={`${mode&&`text-black`} min-h-[100px]`}>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}  className="btn btn-primary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
