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
import axios from "axios";
import Search from "./Search";


const Home = () => {
    const [service, setService] = useState([])


    const [searchItem, setSearchItem] = useState([]);
    const [finalResult, setFinalResult] = useState([]);
    const [searchLength, setSearchLength] = useState(0);
    const search = (e) => {
        const searchValue = e.target.value;
        // console.log(searchValue.length);
        // if(searchValue.length)
        setSearchLength(searchValue.length);
        // console.log(searchLength);


        // console.log(searchValue);
        axios.get("https://travilo-guide-server.vercel.app/allservices")
            .then(response => {
                // setServices(response.data);
                // console.log(response.data);
                setSearchItem(response.data)
            })
        const result = searchItem.filter(item => {
            // console.log(searchValue.toLowerCase());
            const searchResult = (item.name.toLowerCase().includes(searchValue));
            return searchResult;

        })
        // console.log(result);
        setFinalResult(result);


    }

    useEffect(() => {
        fetch('https://travilo-guide-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    const fourData = service.slice(0, 4)

    console.log(service);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="flex flex-col justify-center md:flex-row">
                <input onChange={search} name="search" type="text" placeholder="Search Services" className="p-2 w-1/2 bg-black text-white bg-opacity-70" />
            </div>
            <div className={`flex flex-col justify-center items-center
            ${searchLength > 0 ? "" : "hidden"}
            `}>
                {
                    finalResult.map(element => <Search key={element._id} res={element}></Search>)
                }
            </div>
            <About></About>
            <p className="text-center text-6xl font-semibold my-10 dark:text-white">Our Services</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:gap-5">
                {
                    fourData?.map(item => <Service key={item._id} info={item}></Service>)
                }
                <Link to='/services' className="flex justify-center col-span-2" ><button className="btn text-sm font-bold bg-[#992833] dark:bg-gray-800 hover:bg-slate-600 text-white">Show more</button></Link>
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