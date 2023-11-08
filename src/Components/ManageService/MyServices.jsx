import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types"
 
const MyServices = ({ service }) => {
    const { _id, name, image, price, detail } = service;
 
    const handleDelete = (name, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Really want to delete ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://travilo-guide-server.vercel.app/myservices/${id}`, id)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "",
                                text: `Deleted! ${name}`,
                                icon: "success"
                            });
                        }
                    })
 
            }
        });
    }
    return (
        <div className="">
 
            <div className="grid md:grid-cols-6 gap-2 items-center shadow-lg">
                <div className="">
                    <img src={image} alt={image} className="rounded-md" />
                </div>
                <div className="md:col-span-5 space-y-2 p-4">
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">{name}</p>
                        <p className="text-2xl font-medium text-travego2">${price}</p>
                    </div>
                    <p className="text-lg">{detail}</p>
                    <div className="flex gap-2">
                        <Link to={`/update/${_id}`} className="text-green-700 font-medium hover:underline">Update</Link>
                        <Link onClick={() => handleDelete(name, _id)} className="text-red-700 font-medium hover:underline">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
MyServices.propTypes={
    service: PropTypes.object.isRequired,
}
 
export default MyServices;