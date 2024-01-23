import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import resume from '../../../public/Resume.pdf'

const Banner = () => {
  return (
    <div id="home" className="pt-40 mb-32">
      <div className="flex md:flex-row flex-col-reverse justify-center ">
        <div className="md:me-32">
          <h2 className="md:text-5xl md:ms-0 text-4xl ms-3 font-bold text-white">
            <span className="text-3xl font-medium md:ms-0 text-[#068dfb] ">Hello,</span> <br />I am
            <span className="text-transparent bg-gradient-to-r from-[#068dfb] to-indigo-700 text-5xl md:text-6xl bg-clip-text ms-2">
            Ahmed Rahi
            </span>
          </h2>
          <h4 className="text-white font-bold text-2xl ms-3 md:ms-0 md:text-4xl mt-4">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              I am a
              <span className="text-transparent bg-gradient-to-r from-[#068dfb] to-indigo-700 text-2xl md:text-4xl bg-clip-text ms-2">
                <Typewriter
                  options={{
                    strings: ["MERN Stack Developer", "Frontend Developer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </span>
          </h4>

          <p className="md:w-[600px] w-80 md:ms-0 ms-3 mt-2 text-gray-200">
            Passionate and dedicated MERN Stack Developer and expert Frontend
            Developer
          </p>
          <a href={resume} download="Resume">
          <button className="btn bg-gradient-to-r from-[#068dfb] to-indigo-700 hover:scale-110 border-none my-3 ms-3 md:ms-0 text-white">
            <FaDownload></FaDownload> Download Resume
          </button>
          </a>
          <div className="flex text-white mt-2 ms-3 md:ms-0">
            <a href="https://www.facebook.com/ahmed.rahi.92798072">
              <FaFacebook size={30} className="me-2"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-rahi-538560275/">
              <FaLinkedin size={30} className="me-2"></FaLinkedin>
            </a>
            <a href="https://github.com/AhmedRahi18">
              <FaGithub size={30} className="me-2"></FaGithub>
            </a>
          </div>
        </div>
        <div className="mb-5">
          <img
            className="w-80 md:mx-0 mx-auto md:w-96 border-8 border-blue-800 rounded-full"
            src="https://i.ibb.co/qMgGpSN/Picsart-23-07-02-01-36-38-131.png?fbclid=IwAR29rJkgAU3CXf6bN2KjDqWAHGvxZJCcWOuCmPfRrK2JPW2QSTV6VQdpigg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
