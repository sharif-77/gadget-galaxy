import { MdEmail } from "react-icons/md";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Footer = () => {
  const {mode}=useContext(AuthContext)
  return (
   <div className={`${mode?`  dark:bg-black text-white `:''} `}>

     <div className={`${mode?`  dark:bg-black ` :`bg-[#032b45]`} w-full min-h-[30vh]  py-10 text-white`}>
      <div className="w-4/5 mx-auto py-10">
        <main className="flex flex-col lg:grid grid-cols-3 gap-10  justify-between mt-5">
          <div>
            <h1 className="text-2xl font-bold">Follow Us On</h1>
            <div className="my-4 flex flex-col gap-3">
              <p className="flex items-center gap-2 font-bold">
                {" "}
                <FaFacebook className="text-2xl " />
                <span>Facebook</span>
              </p>
              <p className="flex items-center gap-2 font-bold">
                {" "}
                <FaTwitter className="text-2xl " />
                <span>Twitter</span>
              </p>
              <p className="flex items-center gap-2 font-bold">
                {" "}
                <FaInstagram className="text-2xl " />
                <span>Instagram</span>
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-5">Support</h1>
            <ul className="  space-y-3">
              <li>Chat With Us</li>
              <li>Product Help</li>
              <li>Order Help</li>
              <li> Hassle free Service</li>
              <li>High professionalism and dedication.</li> 
            </ul>
          </div>

            {/* contact start */}

          <div>
            <div className=" space-y-3">
              <h1 className="mb-5 text-2xl font-bold">Contact</h1>

              <div>
                <p className="flex gap-5">
                  <span>
                    <FaHome className="text-2xl" />
                  </span>{" "}
                  <span>
                    <span className=" font-bold">Dhaka Office:</span> Level -7,
                    Suite -2, A K Complex, 19 Green Road,Dhanmondi,  Dhaka –
                    1205, Bangladesh
                  </span>
                </p>
              </div>

             

              <div>
                <p className="flex gap-5">
                  <span>
                    <FaPhoneAlt className="text-xl" />
                  </span>{" "}
                  <span>
                    <span className=" font-bold">Phone:</span> +88 01913 040400,
                    +88 01603 040400
                  </span>
                </p>
              </div>

              <div>
                <p className="flex gap-5">
                  <span>
                    <MdEmail className="text-xl" />
                  </span>{" "}
                  <span>
                    <span className=" font-bold">Email:</span>{" "}
                   Gadget-galaxy@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
   </div>
  );
};

export default Footer;
