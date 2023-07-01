import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div id="about">
            <h2 className="text-center font-fold text-5xl text-white mb-16">About Me</h2>
            <div className="flex justify-center ">
            <div className="mt-10 me-40">
                <img className="w-96 brightness-90 mb-5 rounded-xl bg-gradient-to-r from-indigo-900 to-violet-900" src="https://i.ibb.co/L19HbBQ/Picsart-23-07-02-01-42-28-306.png?fbclid=IwAR1QmrYdkjBYYcwedSX3xbNqIZ3Ev_ZS1ssAPLhpFlsGZRcZPVxPZ7boJ9o" alt="" />
            </div>
            <div>
                <p className="w-[600px] text-gray-200 text-xl mt-10">I'm a MERN Stack Developer and expert front-end developer.I lives in Chittagong,Bangladesh With a strong work ethic, dedication, and a passion for learning, I consistently deliver exceptional results. I specialize in creating dynamic web applications using the MERN stack and have extensive expertise in front-end technologies.As a fast learner, I stay updated with the latest industry trends. Feel free to explore my portfolio and discover my commitment to excellence. If you're interested in collaborating, don't hesitate to reach out.
                </p>
                <div className="flex">
                    <div className="me-8 bg-gradient-to-r from-indigo-900 to-violet-800 p-5 text-center mt-8">
                        <p className="text-white text-5xl">1</p>
                        <p className="text-white w-24">Years of Experience</p>
                    </div>
                    <div className="me-8 bg-gradient-to-r from-indigo-900 to-violet-800 p-5 text-center mt-8">
                        <p className="text-white text-5xl">15+</p>
                        <p className="text-white w-24">Projects Completed</p>
                    </div>
                </div>
                <Link to='/#contact'><button className="btn btn-primary text-gray-100 mt-10">Contact Me</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default AboutMe;