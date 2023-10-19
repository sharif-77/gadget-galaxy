import Banner from '../../Components/Header/Banner';
import Brands from '../../Components/Brands/Brands';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UpComingProducts from '../../Components/UpComingProduct/UpComingProducts';
import WhyShouldChose from '../../Components/WhyShouldChose/WhyShouldChose';


const Home = () => {
  const {mode}=useContext(AuthContext)

    return (
        <div >
           <div className={`${mode?`  dark:bg-black dark:text-white `:'text-black'} py-10`}>
           <Banner/>
           </div>
           <div className={`${mode?`  dark:bg-black  `:'text-black'} py-10`}>
            <Brands/>
           </div>
         
           <WhyShouldChose/>


           <div className={`${mode?`  dark:bg-black  `:'text-black'} py-10`}>
           <UpComingProducts/>
           </div>

          

          
            
        </div>
    );
};

export default Home;