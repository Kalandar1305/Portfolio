import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer  className="bg-slate-800 text-white lg:px-28 px-4 py-20">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="flex flex-col mb-4 md:mb-0 items-center md:mr-8 md:text-center">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className="text-[16px]   "> Email : <a href="mailto:kalandar1305@gmail.com" className="hover:text-fuchsia-600 underline ">kalandar1305@gmail.com</a></p>
          <p className="text-[16px]  ">Phone : +91 9008392347</p>
        </div>
        <div className="flex flex-col items-center md:text-center">
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
        
          <a
            href="https://github.com/Kalandar1305" target="_blank" rel="noreferrer"
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaGithub className="text-[28px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/kalandar-bbb9461b6/" target="_blank" rel="noreferrer"
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaLinkedin className="text-[28px]" />
          </a>
          <a
            href=""
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaXTwitter className="text-[28px]" />
          </a>
          <a
            href="https://www.instagram.com/___kalandar/" target="_blank" rel="noreferrer"
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaInstagram className="text-[28px]" />
          </a>
        </div>
        </div>
        <div className="flex flex-col items-center md:text-center ">
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase text-center">Site Map</h2>
        <ul className="flex gap-4 md:gap-8 text-[18px] text-white ">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer ">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer ">
                  Skills
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Project">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer ">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer ">
                  Contact{" "}
                </li>
              </Link>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
