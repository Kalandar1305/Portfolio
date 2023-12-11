
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center " id="Home">
      <div className="h-full lg:py-40 flex flex-col  justify-center lg:items-start items-center text-white ">
        <div className="flex flex-col ">
          <h2
            data-aos="fade-right"
            className="text-[48px] font-semibold mb-8 leading-normal uppercase"
          >
            Welcome to <span className="text-fuchsia-500">My Website</span>{" "}
          </h2>

          <p
            data-aos="fade-right"
            className=" text-2xl font-bold mb-2 leading-normal"
          >
            Hello, I'm <span className="text-fuchsia-500 uppercase">Kalandar</span>
          </p>
          <p
            data-aos="fade-right"
            className=" text-2xl font-bold mb-8 leading-normal"
          >
            Software Developer
          </p>
          <div className="flex justify-center  gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Kalandar1305"
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalandar-bbb9461b6/"
                target="_blank"
                rel="noreferrer"
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
                href="https://www.instagram.com/___kalandar/"
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
        </div>
        

        
      </div>
      <img
        data-aos="fade-up"
        src="home-main.svg"
        className="rounded-full w-56 h-56  p-1 md:w-80 md:h-80 lg:w-96 lg:h-96  img_glow"
        alt="profile"
      ></img>
    </div>
  );
};

export default Banner;
