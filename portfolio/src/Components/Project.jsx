import Aos from "aos";
import { useEffect } from "react";


const Project = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  },[])

  return (
    <div id="Project" className="p-20 flex flex-col items-center justify-center ">
      <h1 className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 justify-around gap-20">
        
      </div>
    </div>
  )
}

export default Project