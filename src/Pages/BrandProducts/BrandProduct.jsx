const BrandProduct = ({product}) => {
    const {image,name,description}=product
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
          <h2 className="card-title">{name}</h2>
          <p className="min-h-[100px]">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
