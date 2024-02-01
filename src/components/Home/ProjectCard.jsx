import { useState } from "react";
import "./Projects.css"

const ProjectCard = ({ project }) => {
  const { image, name, details, liveLink, githubClient, githubServer } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="Image"
        className={`w-80 mx-auto md:mx-0 md:w-[500px] lg:w-[600px] md:transition-transform duration-300 ${
          isHovered ? 'md:scale-110 brightness-50' : ''
        }`}
      />
      {isHovered && (
        <div className="absolute top-0  left-0 w-full h-full">
          <p id="name" className="text-white text-center md:mt-2 font-bold text-lg md:text-2xl ">{name}</p>
          <p id="details" className="text-white text-center w-40 md:w-4/5 mx-auto">{details}</p>
          <div id="links" className="flex justify-center">
            {liveLink && <a href={liveLink} className="text-[#068dfb] ms-3 me-1 underline">Live Link | </a>}
            {githubClient && <a href={githubClient} className="text-[#068dfb] me-1 underline">Github Client | </a>}
            {githubServer && <a href={githubServer} className="text-[#068dfb] underline">Github Server</a>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
