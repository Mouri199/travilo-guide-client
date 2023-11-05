import Destination from "./Destination";
import Gallery from "./Gallery";
import HomeBanner from "./HomeBanner";
import LogoCart from "./LogoCart";
import Section from "./Section";
import SweetMemory from "./SweetMemory";
import TravelersSay from "./TravelersSay";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
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