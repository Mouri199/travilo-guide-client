
import { Link } from 'react-router-dom';

const AllService = ({ serv }) => {
    const { _id,image,price,name,detail,userPhoto,username} = serv || {}
    return (
        <div>
            <div className='lg:flex dark:text-white items-center gap-10'>
                <div>
                    <img src={image} alt={image} className="max-w-sm  rounded-md" />
                </div>
                <div className="lg:space-y-2">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xl font-bold ">${price}</p>
                    <p className="text-xl"></p>
                    <p className="text-gray-600 dark:text-white">{detail?.slice(0, 300)}... <Link to={`/details/${_id}`} className="text-chocolate text-lg font-">More</Link>
                    </p>

                    <div className="flex items-center gap-2">
                        <img src={userPhoto} alt="" className="h-7 w-7 rounded-full" />
                        <p className="text-sm font-medium text-gray-800">{username}</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default AllService;