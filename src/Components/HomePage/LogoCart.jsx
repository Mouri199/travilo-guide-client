import img from '../../assets/images/partner-1-white.png'
import img2 from '../../assets/images/partner-2-white.png'
import img3 from '../../assets/images/partner-3-white.png'
import img4 from '../../assets/images/partner-4-white.png'
import img5 from '../../assets/images/partner-5-white.png'

const LogoCart = () => {
    return (
        <div className=''>
            <div className='bg-gray-700 lg:flex py-16 space-x-10 justify-center'>
                <img src={img} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
        </div>
    );
};

export default LogoCart;