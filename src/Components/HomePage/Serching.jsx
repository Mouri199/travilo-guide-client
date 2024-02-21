import { useEffect, useState } from "react";



const Serching = ({ search }) => {
    const [services, setServices] = useState()
    useEffect(() => {
        if (search.trim() !== '') { // Check if search query is not empty
            fetch(`https://travilo-guide-server.vercel.app/service?name=${search}`)
                .then(res => res.json())
                .then(data => setServices(data))
                .catch(error => console.error("Error fetching services:", error));
        } else {
            setServices([]); // If search query is empty, clear the services
        }
    }, [search]);

    return (
        <div>
            {
                search.trim() !== '' &&
                services?.map((serviceData) => (
                    <div key={serviceData?._id}>
                        <div >
                            <img src={serviceData?.image} alt={serviceData?.image} className="rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-2xl font-bold">{serviceData?.name}</p>
                            <p className="text-xl font-bold ">${serviceData?.price}</p>
                            <p className="text-xl"></p>
                            <p className="text-gray-600 dark:text-white">{serviceData?.detail.slice(0, 100)}...
                            </p>

                            <div className="flex items-center gap-2">
                                <img src={serviceData?.userPhoto} alt="" className="h-7 w-7 rounded-full" />
                                <p className="text-sm font-medium text-gray-800">{serviceData?.username}</p>
                            </div>


                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Serching;