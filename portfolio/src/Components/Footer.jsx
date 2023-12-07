import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer  className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase "> Logo</span>
          <p className="text-[16px] my-4 ">
            By default, Tailwind provides six drop shadow utilities, one inner
            shadow utility, and a utility for removing existing shadows. You can
            customize these values by editing theme.boxShadow or
            theme.extend.boxShadow in your tailwind.config.js file.
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4 ">Email : kalandar1305@gmail.com</p>
        </div>
        <div>
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
        
          <a
            href=""
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaGithub className="text-[28px]" />
          </a>
          <a
            href=""
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
            href=""
            className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
          >
            <FaInstagram className="text-[28px]" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
