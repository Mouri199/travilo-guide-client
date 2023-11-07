import { useLoaderData } from "react-router-dom";
import BookingData from "./BookingData";


const MyBooking = () => {
    const booking = useLoaderData()
  console.log(booking);
    return (
        <div className="grid grid-cols-1 gap-20 lg:mx-40">
            {
                booking.map(data => <BookingData key={data._id} Book={data}></BookingData>)
            }
        </div>
    );
};

export default MyBooking;