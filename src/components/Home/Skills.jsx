import ProgressBar from "@ramonak/react-progress-bar";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])
    return (
        <div id="skills" className="mt-32">
            <div>
            <h2 className="text-center font-fold text-5xl text-white mb-20">
                My Skills
            </h2>
            <div className="text-white flex justify-around pb-20" data-aos="fade-up">
                <div>
                    <p className="my-2">HTML</p>
                    <ProgressBar  bgColor="#328"className="md:w-96 w-44" completed={90} />
                    <p className="my-2">CSS</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={85} />
                    <p className="my-2">BootStrap</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={85} />
                    <p className="my-2">Tailwind</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={85} />
                    <p className="my-2">JavaScript</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={75} />
                    <p className="my-2">React</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={80} />
                </div>
                <div>
                <p className="my-2">Firebase</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={80} />
                    <p className="my-2">Github</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={80} />
                    <p className="my-2">MongoDB</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={70} />
                    <p className="my-2">Node JS</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={55} />
                    <p className="my-2">Express JS</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={65} />
                    <p className="my-2">Wordpress</p>
                    <ProgressBar  bgColor="#328" className="md:w-96 w-44" completed={80} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;