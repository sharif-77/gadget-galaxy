const CartItem = ({ product, cartImtems, setCartItems }) => {
  const handleCartItemDelete = () => {
    fetch(`https://gadget-galaxy-server-nine.vercel.app/carts/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        const remain = cartImtems.filter((item) => item._id !== product._id);
        setCartItems(remain);
      });
  };

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            className="min-h-[300px] max-h-[300px] "
            src={product.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl">{product.name}</h1>
          <h1 className="text-lg font-bold">Price : $ {product.price}</h1>
          <div className="card-actions justify-end">
            <button onClick={handleCartItemDelete} className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
