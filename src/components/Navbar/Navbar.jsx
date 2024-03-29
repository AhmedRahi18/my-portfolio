import {
  FaCode,
  FaEnvelopeOpenText,
  FaFolderOpen,
  FaHandshake,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-scroll";
import './Navbar.css';
const NavBar = () => {
  const navOptions = (
    <>
      <li className="my-font">
        <Link className="hover:text-[#068dfb]" to="home" smooth={true}>
          <div className="flex md:flex-col flex-row hover:text-[#068dfb]">
            <p className="md:ms-2 md:me-0 me-2">
              <FaHome size={20}></FaHome>
            </p>
            <p>Home</p>
          </div>
        </Link>
      </li>
      <li className="my-font">
        <Link className="hover:text-[#068dfb]" to="about" smooth={true}>
          <div className="flex md:flex-col flex-row hover:text-[#068dfb]">
            <p className="md:ms-3 md:me-0 me-2">
              <FaUser size={20}></FaUser>
            </p>
            <p>About</p>
          </div>
        </Link>
      </li>
      <li className="my-font">
        <Link className="hover:text-[#068dfb]" to="skills" smooth={true}>
          <div className="flex md:flex-col flex-row hover:text-[#068dfb]">
            <p className="md:ms-2 md:me-0 me-2">
              <FaCode size={20}></FaCode>
            </p>
            <p>Skills</p>
          </div>
        </Link>
      </li>
      <li className="my-font">
        <Link className="hover:text-[#068dfb]" to="projects" smooth={true}>
          <div className="flex md:flex-col flex-row hover:text-[#068dfb]">
            <p className="md:ms-4 md:me-0 me-2">
              <FaFolderOpen size={20}></FaFolderOpen>
            </p>
            <p>Projects</p>
          </div>
        </Link>
      </li>
      <li className="my-font">
        <Link className="hover:text-[#068dfb]" to="contact" smooth={true}>
          <div className="flex md:flex-col flex-row hover:text-[#068dfb]">
            <p className="md:ms-4 md:me-0 me-2">
              <FaEnvelopeOpenText size={20}></FaEnvelopeOpenText>
            </p>
            <p>Contact</p>
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div id="navbar" className="navbar fixed bg-opacity-30 max-w-screen-xl bg-transparent text-white z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="-ms-10 btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content -ms-10 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="my-font uppercase md:ms-20 ms-3 md:me-0 me-2 font-semibold text-2xl">
            Ahmed <span className="text-[#068dfb]">Rahi</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="">
        <Link to="contact" smooth={true}>
            <button className="btn bg-gradient-to-r from-[#068dfb] to-indigo-700 border-none hover:scale-110 md:ms-0 ms-1 md:me-10 text-white">
              <FaHandshake size={20} />
              Hire me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
