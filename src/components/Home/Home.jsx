import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import './font.css'

const Home = () => {
    return (
        <div className="my-font">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;