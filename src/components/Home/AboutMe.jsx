import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-scroll";

const AboutMe = () => {
      useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])
    return (
        <div id="about" data-aos = "fade-up">
            <h2 className="text-center font-fold text-5xl text-white mb-16">About Me</h2>
            <div className="md:flex justify-center ">
            <div className="mt-10 md:me-40 ms-16 md:ms-0">
                <img className="w-72 md:w-96 brightness-90 mb-5 rounded-xl bg-gradient-to-r from-gray-900 to-slate-900" src="https://i.ibb.co/L19HbBQ/Picsart-23-07-02-01-42-28-306.png?fbclid=IwAR1QmrYdkjBYYcwedSX3xbNqIZ3Ev_ZS1ssAPLhpFlsGZRcZPVxPZ7boJ9o" alt="" />
            </div>
            <div>
                <p className="w-80 mx-auto md:mx-0 md:w-[600px] text-gray-200 text-xl mt-10">I'm a highly skilled front-end developer and an expert in the MERN stack, residing in Chittagong, Bangladesh. Currently, I'm working as a web developer at Merseyside Consultancy Bangladesh. My work is marked by a strong commitment, a tireless work ethic, and a genuine enthusiasm for continuous learning. I excel at crafting interactive web applications with the MERN stack and possess in-depth knowledge of front-end technologies. I am a quick learner who stays current with the latest trends in the industry. You're welcome to explore my portfolio and witness my unwavering dedication to delivering top-notch results. If you're interested in potential collaboration, please don't hesitate to get in touch.
                </p>
                <div className="flex justify-center md:justify-normal">
                    <div className="me-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded p-5 text-center mt-8">
                        <p className="text-white text-5xl">1</p>
                        <p className="text-white w-24">Years of Experience</p>
                    </div>
                    <div className="me-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded p-5 text-center mt-8">
                        <p className="text-white text-5xl">15+</p>
                        <p className="text-white w-24">Projects Completed</p>
                    </div>
                </div>
                <div className="text-center md:text-start md:ms-20">
                <Link to='contact' smooth={true}>
                <button className="btn bg-gradient-to-r from-[#068dfb] to-indigo-700 hover:scale-110 border-none text-gray-100 mt-10 md:ms-0">Contact Me</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutMe;