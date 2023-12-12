import Aos from "aos";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
       <img
        data-aos="fade-up"
        src="profile.jpeg"
        className="rounded-full w-56 h-56  p-1 md:w-80 md:h-80 lg:w-96 lg:h-96  img_glow"
        alt="profile"
  ></img>
      <div className="h-full lg:py-40 flex flex-col justify-center  items-center text-white">
        <h2
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase "
        >
          About me
        </h2>
        <p data-aos="fade-left">
          I recently completed my Bachelor of Engineering in{" "}
          <span className="text-fuchsia-800 uppercase text-[18px]">
            Information Science and Engineering
          </span>{" "}
          in 2023 at NMAM Institute of Technology, Nitte, with a notable CGPA of
          8.87.
        </p>
        <p data-aos="fade-left">Currently, I am actively learning the{" "}
        <span className="text-fuchsia-800 uppercase text-[18px]">
          MERN stack
        </span>{" "}
        and enthusiastically{" "}
        <span className="text-fuchsia-800 uppercase text-[18px]">
          open to opportunities
        </span>{" "}
        in the software field.{" "}</p>
       
        <div className="flex justify-center space-x-4 mt-8"  data-aos="fade-right">
          <a
            href="https://bit.ly/Kalandar-Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden">
              Resume
            </button>
          </a>

          <a
            href="https://bit.ly/Kalandar-certificates"
            target="_blank"
            rel="noreferrer"
          >
            <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden">
              Certificates
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
