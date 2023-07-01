import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Skills from "./Skills";
import './font.css'

const Home = () => {
    return (
        <div className="my-font">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;