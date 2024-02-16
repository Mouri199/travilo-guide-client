import img from '../../assets/images/destination-3.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
const About = () => {
    return (
        <div>
            <div className='lg:flex items-center  justify-center my-20'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='lg:ml-20 lg:mx-0 md:mx-10'>
                    <p className='lg:text-5xl dark:text-white text-c font-semibold'>About Us</p>
                    <p className='lg:text-3xl dark:text-white text-center  font-bold my-5'>Welcome to <span className='text-[#992833]'>Travilo-Guide</span></p>
                    <div className='flex justify-between text-lg dark:text-white gap-10'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight> <p>First Class Flights</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight> <p className='my-4'>  Handpicked Hotels</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight><p>5 Star Accommodations</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight><p> Latest Model Vehicles</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight><p className='my-4'> 150 Premium City Tours</p>
                            </div>

                            <div className='flex items-center  gap-3'>
                                <AiOutlineArrowRight className='text-[#992833]'></AiOutlineArrowRight><p>24/7 Service</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn my-4 bg-[#992833] text-white dark:bg-gray-800 hover:bg-slate-600'>About More</button>
                </div>

            </div>
        </div>
    );
};

export default About;