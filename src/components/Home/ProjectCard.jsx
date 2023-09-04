import { useState } from "react";

const ProjectCard = ({project}) => {
    const {image,name,details,liveLink,githubClient,githubServer} = project;
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
          <p className="text-white text-center md:mt-5 font-bold md:mb-3 text-lg md:text-2xl md:me-20 lg:me-80">{name}</p>
          <p className="text-white w-80 md:w-96 mx-auto md:mx-0 md:me-20 text-xs md:text-sm md:ms-20">{details}</p>
          <div className="flex justify-center md:me-32 lg:me-80">
          <a href={liveLink} className="text-indigo-400 ms-3 me-1 underline">Live Link | </a>
          <a href={githubClient} className="text-indigo-400 me-1 underline">Github Client | </a>
          <a href={githubServer} className="text-indigo-400 underline">Github Server</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;