import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ParticleBg from "../ParticleBg/ParticleBg";
const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ParticleBg></ParticleBg>
        </div>
    );
};

export default Main;