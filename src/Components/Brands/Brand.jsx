import { Link } from "react-router-dom";

const Brand = ({brand}) => {
  return (
    <div>
      <Link to={`/brandProducts/${brand.brand_name}`}>
      <div className="card  bg-base-100 shadow-xl p-5">
        <figure>
          <img
          className="min-h-[250px]"
            src={brand.logo}
            alt="Logo"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center text-black">{brand.brand_name}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Brand;
