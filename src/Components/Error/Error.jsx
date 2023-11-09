import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Sad from "../../Sad.json"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center dark:bg-[#1f2937] dark:text-[#949ea9]">
                {/* <h1 className="text-travego font-bold text-6xl pt-10">404 Error</h1> */}
                <Lottie className="h-96" animationData={Sad} loop={true}></Lottie>
                <Link to='/' className=" dark:bg-gray-800 hover:bg-opacity-80 p-2 rounded-md text-chocolate dark:text-white">Go Back To Homepage</Link>
            </div>

            <Footer></Footer>
         

        </div>
    );
};

export default Error;