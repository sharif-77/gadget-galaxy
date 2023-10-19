import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const dataForUpdate = useLoaderData();
  const { name, image, brandName, productType, price, description, ratting } =
    dataForUpdate;
  console.log(dataForUpdate);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratting = form.ratting.value;

    const productsInfo = {
      name,
      image,
      brandName,
      productType,
      price,
      description,
      ratting,
    };

    fetch("https://gadget-galaxy-server-nine.vercel.app/products", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productsInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    console.log(
      name,
      image,
      brandName,
      productType,
      price,
      description,
      ratting
    );
  };
  return (
    <div className="mb-40 mx-5 ">
      <div className="shadow-xl  p-10 w-full md:w-3/5 lg:w-2/5 bg-[#220032] text-white m-auto mt-28 rounded ">
        <p className="text-center my-10 text-xl font-bold">Add Product</p>
        <form onSubmit={handleUpdateProduct} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name"> Name</label>
            <input
              className="bg-[#F3F3F3]  text-black py-2 px-4 rounded-md"
              type="text"
              name="name"
              id="name"
              placeholder=" Name"
              defaultValue={name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="image"> image</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="image"
              id="image"
              placeholder="Image"
              defaultValue={image}
            />
          </div>

          {/* end */}

          <div className="flex flex-col gap-2">
            <label htmlFor="brandName">Brand Name</label>
            <select
              name="brandName"
              id="type"
              defaultValue={brandName}
              className="bg-[#F3F3F3]  text-black py-2 px-4 rounded-md"
            >
              <option value="apple">Apple</option>
              <option value="acer">Acer</option>
              <option value="samsung">Samsung</option>
              <option value="lenovo">Lenovo</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="asus">Asus</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="selectValue">Product Type</label>
            <select
              name="productType"
              id="selectValue"
              defaultValue={productType}
              className="bg-[#F3F3F3]  text-black py-2 px-4 rounded-md"
            >
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="watch">Watch</option>
            </select>
          </div>

          {/* end */}

          <div className="flex flex-col gap-2">
            <label htmlFor="price"> Price</label>
            <input
              className="bg-[#F3F3F3]  text-black py-2 px-4 rounded-md"
              type="number"
              name="price"
              id="price"
              defaultValue={price}
              placeholder="Price"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description"> Description</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="description"
              id="description"
              defaultValue={description}
              placeholder="Description"
            />
          </div>

          {/* end */}
          <div className="flex flex-col gap-2">
            <label htmlFor="ratting"> Ratting</label>
            <input
              className="bg-[#F3F3F3]  text-black py-2 px-4 rounded-md"
              type="number"
              name="ratting"
              id="ratting"
              defaultValue={ratting}
              placeholder="Ratting"
            />
          </div>

          {/* end */}

          <div className="flex flex-col my-3 ">
            <button
              className="bg-[#14c898f3] py-2 px-4 rounded-md  font-bold mt-5"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;