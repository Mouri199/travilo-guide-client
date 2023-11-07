import img1 from '../../assets/images/memory.png'
import img2 from '../../assets/images/f-icon-3.png'
import img3 from '../../assets/images/f-icon-4.png'
import img4 from '../../assets/images/f-icon-5.png'
import img5 from '../../assets/images/f-icon-6.png'
import img7 from '../../assets/images/bg-gradient-6.png'


const SweetMemory = () => {
    return (
        <div>
          
            <div className='dark:text-white h-[1100px] px-80 gap-28 lg:flex items-center'>
                <div>
                    <img className='absolute ' src={img1} alt="" />
                    <img className='relative top-[200px] right-[300px]' src={img7} alt="" />

                </div>
                <div>
                    <p className='text-5xl'>We Let Your Sweet Memory <br /> Ever Unforgottable </p>


                    <div className='flex  justify-between'>  
                        <div className='my-10 ml-5'>
                            <div className='my-10'>
                                <img src={img2} alt="" />
                                <p className='lg:text-3xl'>Expert Travel Agent</p>
                                <p>Trust in the guidance of our seasoned <br /> travel agents, to curate your perfect <br /> journey.</p>
                            </div>
                            <div>
                                <img src={img3} alt="" />
                                <p className='lg:text-3xl'>World Class Service</p>
                                <p>Immerse yourself in a world of <br /> unparalleled service, for unforgettable <br /> travel experience.</p>
                            </div>
                        </div>
                        <div className='my-10'>
                            <div className='my-10'>
                                <img src={img4} alt="" />
                                <p className='lg:text-3xl'>Easy Booking Options</p>
                                <p>With our user-friendly booking platform,<br /> planning your dream vacation becomes a <br /> breeze.</p>
                            </div>
                            <div>
                                <img src={img5} alt="" />
                                <p className='lg:text-3xl'>Total Secured Travel</p>
                                <p>Rest assured as we prioritize your safety <br /> and peace of mind, your travel is fully <br /> protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SweetMemory;