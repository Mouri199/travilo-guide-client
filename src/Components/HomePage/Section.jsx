import img from '../../assets/images/intro-1.png'
import img2 from '../../assets/images/intro-2.png'
import img3 from '../../assets/images/intro-3.png'

const Section = () => {
    return (
        <div>
            <div className='lg:flex justify-around lg:px-40 py-16 dark:text-white'>
                <div className='text-center' >
                    <img className='mx-40' src={img} alt="" />
                    <p className='lg:text-3xl font-semibold py-5'>Most Popular Destinations</p>
                    <p>Discover the worlds most sought-after destinations, <br /> from breathtaking wonders to vibrant cityscapes. Unveil <br /> iconic landmarks, immerse in diverse cultures, and <br /> create cherished memories on your journey of a lifetime.</p>
                </div>
                <div className='text-center'>
                    <img  className='lg:mx-52 mx-40' src={img2} alt="" />
                    <p className='lg:text-3xl font-semibold py-5'>Budget Friendly Packages</p>
                    <p >Travel doesnt have to break the bank! Explore our <br /> curated selection of budget-friendly packages, where <br /> you can experience incredible adventures without <br />compromising on quality. Embrace wanderlust without the financial worry.</p>
                </div>
                <div className='text-center'>
                    <img  className=' mx-40' src={img3} alt="" />
                    <p className='lg:text-3xl font-semibold py-5'>Satisfaction Guarranted</p>
                    <p>Your satisfaction is our top priority. With meticulous <br /> planning and personalized service, we ensure your travel <br /> experiences exceed expectations. Book with confidence, <br /> knowing that your journey will be nothing short of</p>
                </div>
            </div>
        </div>
    );
};

export default Section; 