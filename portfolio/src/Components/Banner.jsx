import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Banner = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  },[])
  

  return (
    <div  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h2 data-aos="fade-right"   className="text-[52px] font-semibold mb-8 leading-normal uppercase">
          Welcome to <span className="text-fuchsia-500">My Website</span>{" "}
        </h2>
        <p data-aos="fade-left"  >You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:shadow-lg to apply the shadow-lg utility at only medium screen sizes and above.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaXTwitter className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up"  
        src="KALANDAR_PROFILE.jpeg"
        className="rounded-full w-56 h-56 border-2 p-1 border-fuchsia-500 img_glow"
        alt="profile"
      ></img>
    </div>
  );
};

export default Banner;
