import img from '../../assets/images/slider-mainbg-001.jpg';
import img2 from '../../assets/images/slider-mainbg-002.jpg';
import img3 from '../../assets/images/slider-mainbg-003.jpg';
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css'

const HomeBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)}
    //   }

    //   const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    //   }

    return (
        <div>
            <div >
                <div>

                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider lg:h-[700px]">
                            <div className="keen-slider__slide number-slide1" >


                                <p className="group relative block" href="#">
                                    <div className="flex-shrink-0 relative w-full lg:w-[2130px] rounded-xl overflow-hidden h-[250px]  lg:h-[600px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                                        <img className="lg:w-full h-[250px] lg:h-full lg:absolute lg:top-0 ;g:left-0 lg:object-cover" src={img} alt="Image Description" />
                                    </div>



                                    <div className="absolute bottom-0 lg:bottom-56 lg:left-[600px] inset-x-0 z-10">
                                        <div className="flex flex-col h-full p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-5xl font-semibold text-white group-hover:text-white/[.8]">


                                                <Typewriter
                                                    words={["Lets Leave", "The Road!", "And Take", "The Trails"]}
                                                    loop={5}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}

                                                />
                                            </h3>


                                        </div>
                                        <button className="btn lg:ml-8 text-sm font-bold bg-[#992833] dark:bg-gray-800 text-white hover:bg-slate-600">Lets Go</button>
                                    </div>
                                </p>



                            </div>
                            <div className="keen-slider__slide number-slide1">


                                <p className="group relative block" href="#">
                                    <div className="flex-shrink-0 relative w-full lg:w-[2130px] rounded-xl overflow-hidden h-[250px]  lg:h-[600px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                                        <img className="lg:w-full h-[250px] lg:h-full lg:absolute lg:top-0 lg:left-0 lg:object-cover" src={img2} alt="Image Description" />
                                    </div>



                                    <div className="absolute bottom-0 lg:bottom-56 lg:left-[600px] inset-x-0 z-10">
                                        <div className="flex flex-col h-full p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-5xl font-semibold text-white group-hover:text-white/[.8]">

                                                <Typewriter
                                                    words={["Explore the", "world"]}
                                                    loop={5}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000} />
                                            </h3>
                                        </div>
                                        <button className="btn lg:ml-8 text-sm font-bold bg-[#992833] dark:bg-gray-800 text-white hover:bg-slate-600">Lets Go</button>
                                    </div>
                                </p>



                            </div>
                            <div className="keen-slider__slide number-slide1">


                                <p className="group relative block" href="#">
                                    <div className="flex-shrink-0 relative w-full lg:w-[2130px] rounded-xl overflow-hidden h-[250px]  lg:h-[600px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                                        <img className="lg:w-full h-[250px] lg:h-full lg:absolute lg:top-0 lg:left-0 lg:object-cover" src={img3} alt="Image Description" />
                                    </div>



                                    <div className="absolute bottom-0 lg:bottom-32 lg:left-[700px] inset-x-0 z-10">
                                        <div className="flex flex-col h-full p-4 sm:p-6">
                                            <h3 className="text-lg lg:text-6xl font-semibold text-white group-hover:text-white/[.8]">
                                                <Typewriter
                                                    words={["Book with", "Us And", "Book It", "Out Of", "Here!"]}
                                                    loop={5}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000} />
                                            </h3>
                                            <p className='text-white lg:text-2xl'>



                                                {/* Book With Us And Book It Out Of Here! */}
                                            </p>

                                        </div>
                                        <button className="btn lg:ml-8 text-sm font-bold bg-[#992833] dark:bg-gray-800 text-white hover:bg-slate-600">Lets Go</button>
                                    </div>
                                </p>



                            </div>
                        </div>
                    </div>
                    {/* {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )} */}
                </div>
                {
                    loaded && instanceRef.current && (
                        <div className="dots">
                            {[
                                ...Array(instanceRef.current.track.details.slides.length).keys(),
                            ].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx)
                                        }}
                                        className={"dot" + (currentSlide === idx ? " active" : "")}
                                    ></button>
                                )
                            })}
                        </div>
                    )
                }
            </div>


        </div >
    );
};

export default HomeBanner; 