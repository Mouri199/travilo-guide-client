import { useContext, useState } from 'react';

import axios from "axios"
import MyServices from './MyServices';
import { AuthProvider } from '../AuthContributor/AuthContributor';

const ManageService = () => {
    const { user } = useContext(AuthProvider);
    const [services, setServices] = useState([]);
    // console.log(user.email);
    axios.get(`http://localhost:8000/myservices?email=${user?.email}`)
        .then(res => {
            setServices(res.data)
        })

    return (
        <div>
            <div> 
                <h1 className="mt-10 text-center text-4xl font-medium">You Have {services.length} Service(s)</h1>
            </div>
            <div className='p-4 md:p-20 flex flex-col gap-10'>
                {services.map(service => <MyServices key={service._id} service={service}></MyServices>)}
            </div>
        </div>
    );
};

export default ManageService;