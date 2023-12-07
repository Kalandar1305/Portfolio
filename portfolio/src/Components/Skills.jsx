import Aos from "aos";
import { useEffect } from "react";
const Skills = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  },[])

  return (
    <div  id="Skills" className="p-20 flex flex-col items-center justify-center ">
      <h1 data-aos="fade-right" className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500">Skills</h1>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-col-1 justify-around gap-20">
        <h2 data-aos="fade-up"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fucsia-800 b-glow">HTML</h2>
        <h2 data-aos="fade-down"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fucsia-800 b-glow">CSS3</h2>
        <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fucsia-800 b-glow">JavaScript</h2>
        <h2 data-aos="fade-down"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fucsia-800 b-glow">Java</h2>
        <h2 data-aos="fade-up"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fucsia-800 b-glow">React</h2>
      </div>
    </div>
  )
}

export default Skills