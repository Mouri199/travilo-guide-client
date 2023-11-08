import axios from 'axios';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthProvider } from '../AuthContributor/AuthContributor';

const Details = () => {
    const details = useLoaderData()
    const {user} = useContext(AuthProvider)
    const navi = useNavigate()

    const hideModal = () => {
        const modal = document.getElementById("modal");
        modal.classList.add('hidden')
    }

    const { image, price, detail, name, servicename,username } = details

    const handleAdd = e => {
        e.preventDefault()
        const form = e.target;
        const Name = form.Name.value;
        const image = form.image.value;
        const email = form.email.value;
        const price = form.price.value;
        const mail = form.mail.value;
        const date = form.date.value;
        const hostname = form.hostname.value;
        const details = form.details.value;

     
        console.log(name, date, image, mail, price, email);

        const allBooking = {
            name:Name,hostname, date, details, servicename, image, mail, price:price, email:user.email,
        }

        axios.post("https://travilo-guide-server.vercel.app/booking", allBooking)
            .then(res => {
                if (res.data.insertedId)
                    Swal.fire(" ", "Service added successfully!", "success"),
                        form.reset();
                        navi('/')

            })
            .catch(error => {
                if (error) {
                    Swal.fire("", "Something went wrong!", "error")
                }
            })


    }


    return (
        <div>
            <section className="text-gray-600 dark:text-white ">
                <img alt="ecommerce" className="mx-auto lg:w-1/2 w-full lg:h-[400px]  object-cover object-center rounded" src={image} />
                <div className="lg:ml-[400px] py-24">
                    <div className="lg:w-4/5 container lg:ml-[300px] flex ">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font dark:text-white text-gray-500 tracking-widest">{servicename}</h2>
                            <h1 className="text-gray-900 text-3xl dark:text-white title-font font-medium mb-4" >{name}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-chocolate border-b-2 border-chocolate py-2 text-lg px-1">Description</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                            </div>
                            <p className="leading-relaxed mb-4">{detail}</p>



                            <div className="flex justify-between">
                                <span className="title-font font-medium text-2xl dark:text-white text-gray-900">${price}</span>
                                <div>
                                    <button className="flex ml-auto text-white bg-chocolate dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                                </div> 
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <form onSubmit={handleAdd}>
                                            <div className="mb-4 justify-between sm:mb-8">
                                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Name</label>
                                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='Name' defaultValue={name} placeholder="Service name" />

                                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Image</label>
                                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='image' defaultValue={image} placeholder="Service image" />
                                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Details</label>
                                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='details' defaultValue={detail} placeholder="Service image" />
                                                <label className="block mb-2 text-sm font-medium dark:text-white">Host Name</label>
                                                <input type="text" id="hs-feedback-post-comment-name-1" className="py-3 border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" name='hostname' defaultValue={username} placeholder="Service image" />

                                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Provider Email</label>
                                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" defaultValue={user.email} placeholder="Description"  name='email' />

                                                <label className="block mb-2 text-sm font-medium dark:text-white">User Email</label>
                                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"  placeholder="Description" name='mail' />

                                                <label className="block mb-2 text-sm font-medium dark:text-white">Date</label>
                                                <input type="date" id="hs-feedback-post-comment-email-1" className="py-3  border px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Date" name='date' />

                                                <label className="block mb-2 text-sm font-medium dark:text-white">Service Price</label>
                                                <input type="text" id="hs-feedback-post-comment-email-1" className="py-3 px-4  border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Price" defaultValue={price} name='price' />
                                            </div>


                                            <div className="form-control">


                                            </div>
                                            <div className="form-control mt-6">
                                                <button onClick={hideModal} className="btn bg-chocolate dark:bg-gray-800 hover:bg-slate-700 text-white">Book Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;