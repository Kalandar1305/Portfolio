import Aos from "aos";
import { useEffect } from "react";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { SiMysql, SiTailwindcss } from "react-icons/si";
const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      id="Skills"
      className="p-20 flex flex-col items-center justify-center "
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Skills
      </h1>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-col-1 justify-around gap-20">
        <h2
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">Html</span>
          <FaHtml5 className="text-[28px] text-white" />
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
        <span className="uppercase">CSS3</span> <IoLogoCss3 className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">JavaScript</span> <DiJavascript className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">Java</span> <FaJava className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">React</span> <FaReact className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">SQL</span> <SiMysql className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">Tailwind CSS</span>
          <SiTailwindcss className="text-[28px]  text-white" />
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex flex-col items-center justify-center font-semibold text-white rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2  b-glow"
        >
          <span className="uppercase">Material UI</span>  <img src="download.png" alt="Your Alt Text" className="text-[28px] w-7 h-7 text-white" />
        </h2>
      </div>
    </div>
  );
};

export default Skills;
