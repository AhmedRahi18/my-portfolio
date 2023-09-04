import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id="projects" className="mt-20 pb-10" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:ms-32 lg:ms-64">
                <div>
                <h2 className="text-4xl text-center md:text-start md:text-5xl text-white font-bold ">
                    My Recent Projects
                </h2>
                <p className="text-gray-100 mt-10 md:w-[500px] w-96 md:mx-0 mx-auto">I have recently completed this projects.Summper Camp , Cheef of Mexican , Toy Shop . You can checkout my projects</p>
                </div>
                {
                    projects.map(project => <ProjectCard
                    key={project.id}
                    project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;