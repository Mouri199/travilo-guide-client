import React, { useContext } from 'react';
import { AuthProvider } from '../AuthContributor/AuthContributor';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddServices = () => {
    const { user } = useContext(AuthProvider)
    const navi = useNavigate()
    const handleAdd = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const location = form.location.value;
        console.log(name, image, price, description, location);

        const allService = {
            name, image, description, price, location, username: user.displayName,email:user.email, userPhoto: user.photoURL
        }

        axios.post("http://localhost:8000/allservices", allService)
            .then(res => {
                if (res.data.insertedId)
                    Swal.fire(" ", "Service added successfully!", "success"),
                        form.reset();
                navi('/services')
            })
            .catch(error => {
                if (error) {
                    Swal.fire("", "Something went wrong!", "error")
                }
            })
    }


    return (
        <div>
            {/* <!-- Comment Form --> */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                        <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                            Add a Service
                        </h2>
                    </div>

                    {/* <!-- Card --> */}
                    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                        <form onSubmit={handleAdd}>
                            <div className="mb-4 justify-between sm:mb-8">
                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Name</label>
                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='name' placeholder="Service name" />

                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Image</label>
                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='image' placeholder="Service image" />

                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Description</label>
                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Description" name='description' />

                                <label className="block mb-2 text-sm font-medium dark:text-white">Location</label>
                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="location" name='location' />

                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Price</label>
                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3 px-4  border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Price" name='price' />
                            </div>



                            <div className="mt-6 grid">
                                <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#992833] hover:bg-slate-600  text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800">Submit</button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
            </div>
            {/* <!-- End Comment Form --> */}
        </div>
    );
};

export default AddServices;