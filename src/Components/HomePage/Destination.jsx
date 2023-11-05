import img from '../../assets/images/gallery-1.jpg'
import img2 from '../../assets/images/gallery-2.jpg'
import img3 from '../../assets/images/gallery-3.jpg'
import img4 from '../../assets/images/gallery-6.jpg'
import img5 from '../../assets/images/gallery-7.jpg'
import img6 from '../../assets/images/gallery-12.jpg'
import img7 from '../../assets/images/gallery-14.jpg'
import img8 from '../../assets/images/gallery-15.jpg'

const Destination = () => {
    return (
        <div>
            <p className='lg:text-6xl text-3xl dark:text-white text-center my-10 font-semibold'>Popular Destinations</p>
            <div className='lg:flex justify-center space-x-4'>

                <div className='lg:w-[600px] space-y-2'>
                    <img className='w-[600px]' src={img} alt="" />
                    <img src={img7} alt="" />
                </div>
                <div className='lg:w-[290px] space-y-2'>
                    <img src={img2} alt="" />
                    <img src={img8} alt="" />
                    <img src={img4} alt="" />
                </div>
                <div className='lg:w-[470px] space-y-2'>
                    <img className='w-[400px]' src={img3} alt="" />
                    <img className='w-[400px]' src={img6} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Destination;