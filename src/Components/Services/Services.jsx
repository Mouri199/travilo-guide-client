import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllService from './AllService';

const Services = () => {
    const serviceData = useLoaderData()
    console.log(serviceData);
    return (
        <div className='grid grid-cols-1 gap-20 lg:mx-40'>
            {
                serviceData.map(info=> <AllService key={info._id} serv={info}></AllService>)
            }
        </div>
    );
};

export default Services;