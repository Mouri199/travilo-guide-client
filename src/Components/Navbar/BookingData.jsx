import { Link } from "react-router-dom";


const BookingData = ({ Book }) => {

    const {_id, image,price,name,servicename,details } = Book || {}
    return (
        <div>
            <div className='lg:flex items-center gap-10'>
                <div>
                    <img src={image} alt={image} className="max-w-sm  rounded-md" />
                </div>
                <div className="lg:space-y-2">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xl">{servicename}</p>
                    <p className="text-xl font-bold ">${price}</p>
                    <p className="text-xl"></p>
                    <p className="text-gray-600 w-[600px]">{details?.slice(0, 300)}... <Link to={`/details/${_id}`} className="text-chocolate text-lg font-" >More</Link>
                    </p>

                  


                </div>

            </div>
        </div>
    );
};

export default BookingData; 