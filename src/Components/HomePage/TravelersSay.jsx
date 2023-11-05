import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img from '../../assets/images/Screenshot_1.png'
import img2 from '../../assets/images/Screenshot_2.png'
import img3 from '../../assets/images/Screenshot_4.png'
import img4 from '../../assets/images/Screenshot_5.png'
import img5 from '../../assets/images/Screenshot_6.png'
import img6 from '../../assets/images/Screenshot_7.png'
import './Travelars.css'

const TravelersSay = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <div className="">

            <p className="text-center lg:text-6xl text-3xl dark:text-white my-10">What Travelers Say</p>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider  lg:h-[700px]">
                    <div className="keen-slider__slide number-slide1"><img src={img} alt="" /></div>
                    <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
                    <div className="keen-slider__slide number-slide3"><img src={img3} alt="" /></div>
                    <div className="keen-slider__slide number-slide1"><img src={img4} alt="" /></div>
                    <div className="keen-slider__slide number-slide2"><img src={img5} alt="" /></div>
                    <div className="keen-slider__slide number-slide3"><img src={img6} alt="" /></div>
                </div>

            </div>
            {loaded && instanceRef.current && (
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
            )}

        </div>
    );
};


export default TravelersSay;