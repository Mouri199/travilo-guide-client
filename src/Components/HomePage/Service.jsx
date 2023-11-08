import { useState } from "react";
import { AuthProvider } from "../AuthContributor/AuthContributor";
import { Link } from "react-router-dom";

const Service = ({ info }) => {
    const { user } = useState(AuthProvider)

    const { _id, name, image, username, userPhoto, detail, price } = info || {}




    return (
        <div>

            <div className="grid dark:text-white grid-cols-1 items-center md:grid-cols-2 p-10 gap-5">
                <div>
                    <img src={image} alt={image} className="rounded-md" />
                </div>
                <div className="space-y-2">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xl font-bold ">${price}</p>
                    <p className="text-xl"></p>
                    <p className="text-gray-600 dark:text-white">{detail.slice(0, 100)}... <Link to={`/details/${_id}`} className="text-chocolate text-lg font-">More</Link>
                    </p>

                    <div className="flex items-center gap-2">
                        <img src={userPhoto} alt="" className="h-7 w-7 rounded-full" />
                        <p className="text-sm font-medium text-gray-800">{username}</p>
                    </div>


                </div>

            </div>
            {/* <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-3">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">

                            <h2 className="text-3xl font-semibold tracki">{name} Local Tour</h2>
                            <p className="text-2xl font-semibold">${price}</p>

                        </div>
                      
                        <p className="dark:text-gray-100">{detail.slice(0,100)}...</p>
                        <Link to={`/serviceDetails/${_id}`} className="text-chocolate text-xl font-">More</Link>
                       
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="w-10 rounded-full" src={userPhoto} alt="" />
                        <p>{username}</p>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Service;