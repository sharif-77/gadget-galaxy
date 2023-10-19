import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  const [loading, setLoading] = useState(true);
  const { brand } = useParams();
  const lowerBrand = brand.toLowerCase();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-galaxy-server-nine.vercel.app/products")
      .then((res) => res.json())
      .then((allData) => {
        const filteredData = allData.filter(
          (product) => product.brandName == lowerBrand
        );
        setProducts(filteredData);
        setLoading(false);
      });
  }, [lowerBrand]);

  if (loading) {
    return <p className="text-center mb-10 font-bold">Data is loading....</p>;
  }

  return (
    <div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          <SwiperSlide>
            <img
              className="block w-full min-h-[600px] max-h-[600px]"
              src="https://i.ibb.co/HprKrRn/lenovo-laptops-thinkpad-p16-16-intel-feature-3.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full min-h-[600px] max-h-[600px]"
              src="https://i.ibb.co/KjDqHHv/HP-FT03-KV-S23-Ultra-1440x640-D.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full min-h-[600px] max-h-[600px]"
              src="https://i.ibb.co/fdhTwhV/lenovo-laptops-thinkpad-p16-16-intel-feature-4.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full min-h-[600px] max-h-[600px]"
              src="https://i.ibb.co/X8KPPrc/18b0fcbea57fd59f1fc6b8496485479e.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="block w-full min-h-[600px] max-h-[600px]"
              src="https://i.ibb.co/7GLmQ3h/0f837a60a88d001590abd46ccd9c5a62.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-4/5 mx-auto my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <BrandProduct key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center text-5xl mb-20 font-bold">
          {products.length == 0 && (
            <p>This Brand Has No any Available Products Right Now</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
