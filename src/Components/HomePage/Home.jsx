import { useEffect, useState } from "react";
import About from "./About";
import Destination from "./Destination";
import Gallery from "./Gallery";
import HomeBanner from "./HomeBanner";
import LogoCart from "./LogoCart";
import Section from "./Section";
import Service from "./Service";
import SweetMemory from "./SweetMemory";
import TravelersSay from "./TravelersSay";
import { Link } from "react-router-dom";


const Home = () => {
    const [service,setService] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/allservices')
        .then(res => res.json())
        .then(data =>{
            setService(data)
        })
    },[])

    const fourData = service.slice(0,4)

    console.log(service);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <p className="text-center text-6xl font-semibold my-10 dark:text-white">Our Services</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:gap-5">
                {
                    fourData?.map (item => <Service key={item._id} info={item}></Service>)
                }
                  <Link to = '/services'  className="flex justify-center col-span-2" ><button className="btn text-sm font-bold bg-[#992833] dark:bg-gray-800 hover:bg-slate-600 text-white">Show more</button></Link>
            </div>
           
           
            <Section></Section>
            <Destination></Destination>
            <div className="lg:block hidden"><SweetMemory></SweetMemory></div>
            <TravelersSay></TravelersSay>
            <LogoCart></LogoCart>
            <Gallery></Gallery>
        </div>
    );
};
 
export default Home;