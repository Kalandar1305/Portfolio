import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  },[])
  return (

    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down"
        src=""
        className="rounded w-56 h-56 border-2 p-1  img_glow"
        alt="profile"
      ></img>
      <div   className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About me
        </h2>
        <p data-aos="fade-left">
          asicbabcla aiocacaicail biacabicab c aican Lorem ncsdjkchekch ecu ue
          ceuc euebcueybcueyce u ecey ceoc e cceuc eucneoucey
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://bit.ly/Kalaandar_resume" target="_blank" rel="noreferrer"><button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden  ">
              Resume
            </button></a>
              
            </div>
            <div className="flex space-x-2">
            <a href="https://bit.ly/Kalandar-certificates" target="_blank" rel="noreferrer"><button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden  ">
            Certificates
          </button></a>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
