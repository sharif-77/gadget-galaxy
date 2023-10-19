
const UpComingProduct = ({product}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl p-5">
        <figure>
          <img
          className="min-h-[250px] max-h-[250px]"
            src={product.image}
            alt="Logo"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center">Brand : {product.brand_name}</h2>
        </div>
      </div>
            
        </div>
    );
};

export default UpComingProduct;