import { useLoaderData } from "react-router-dom";
import Allservices from "../HomePage/Allservices";


const ServiceDetails = () => {
    const serviceData = useLoaderData()
    console.log(serviceData);
    return (
        <div>
            <div className="grid gap-10 lg:grid-cols-3 grid-cols-1 mx-28">
                {
                    serviceData?.map((data) => <Allservices key={data._id} data={data}></Allservices>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;