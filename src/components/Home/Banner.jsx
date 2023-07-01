import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div id="home" className="pt-40 mb-32">
      <div className="flex justify-center ">
        <div className="me-32">
          <h2 className="text-5xl font-bold text-white">
            Hello, <br />I am
            <span className="text-transparent bg-gradient-to-r from-indigo-500 to-violet-700 text-6xl bg-clip-text ms-2">
            Ahmed Rahi
            </span>
          </h2>
          <h4 className="text-white font-bold text-3xl mt-4">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              I am a
              <span className="text-violet-700 text-4xl ms-2">
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

          <p className="w-[600px] mt-2 text-gray-200">
            Passionate and dedicated MERN Stack Developer and expert Frontend
            Developer
          </p>
          <button className="btn btn-primary my-3 text-white">
            <FaDownload></FaDownload> Download Resume
          </button>
          <div className="flex text-white mt-2">
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
            className="w-96 border-8 border-violet-600 rounded-full"
            src="https://i.ibb.co/qMgGpSN/Picsart-23-07-02-01-36-38-131.png?fbclid=IwAR29rJkgAU3CXf6bN2KjDqWAHGvxZJCcWOuCmPfRrK2JPW2QSTV6VQdpigg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
