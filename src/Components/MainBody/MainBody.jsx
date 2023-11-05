import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Headroom from "react-headroom";



const MainBody = () => {
    return (
        <div>



            <Headroom>
                <Navbar></Navbar>
            </Headroom>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainBody;