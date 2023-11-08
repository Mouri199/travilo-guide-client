import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../assets/images/testi-2.jpg"
import { useEffect } from "react";

const Allservices = ({ data }) => {

    const { _id, name, image, description, price } = data || {}



    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-white">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="lg:text-4xl text-xl font-semibold dark:text-violet-400">{name}</h3>
                            </a>
                            <p className="text-2xl font-semibold dark:text-white">${price}</p>
                        </div>

                        <p className="leadi dark:text-gray-400 lg:text-xl">{description}</p>
                        <div className="flex items-center gap-5">
                            <img className="w-10 rounded-full" src={img} alt="" />
                            <p>Jhon Abraham</p>
                        </div>
                        <div className="flex justify-between">

                            <div className="flex items-center dark:text-white gap-5">
                                <Link to={`/details/${_id}`} >   <button className="lg:text-2xl">Details</button> </Link><AiOutlineArrowRight className="text-xl "></AiOutlineArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allservices;