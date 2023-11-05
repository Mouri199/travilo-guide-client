import img from '../../assets/images/insta-1.jpg'
import img2 from '../../assets/images/insta-11.jpg'
import img3 from '../../assets/images/insta-13.jpg'
import img4 from '../../assets/images/insta-14.jpg'
import img5 from '../../assets/images/insta-15.jpg'
import img6 from '../../assets/images/insta-2.jpg'
const Gallery = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex ">
                    <div className="md:-m-2 -m-1">
                        <div className="flex  w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img2}/>
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={img3}/>
                            </div>
                        </div>
                        <div className="flex  w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={img4}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img5}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={img6}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};  

export default Gallery;