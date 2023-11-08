import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const { _id, name, image, price, detail } = useLoaderData();
    console.log(name);
    const navigate = useNavigate();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const detail = form.detail.value


        const service = {
            name, price, photo, detail
        };
        // console.log(service);
        axios.patch(`https://travilo-guide-server.vercel.app/Details/${_id}`, service)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire("", `${name} updated successfully`, "success");
                    navigate("/manageservice");
                }
            })
    }
    return (
        <div>
            <div>
                <div className="text-center mt-10 font-bold text-4xl">
                    <h1>Update {name}</h1>
                </div>
                <div>
                    <form onSubmit={handleUpdate} className="grid md:grid-rows-3 md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-10">
                        <input name="name" defaultValue={name} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name" />
                        <input name="price" defaultValue={price} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                        <input name="photo" defaultValue={image} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Photo URL" />
                        <input name="detail" defaultValue={detail
                        } className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Photo URL" />
                        {/* <input name="location"  className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location" />
                        <input name="desc" className="col-span-2 border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Short Description" /> */}
                        <input type="submit" value="Update Service" className="col-span-2 bg-chocolate text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;