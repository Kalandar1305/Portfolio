import Aos from "aos";
import { useEffect } from "react";


const Contact = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  },[])
  return (
    <div id="Contact" className="p-4  lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left "className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500">Contact me</h1>
      <form action="" className="flex flex-col gap=2 lg:w-1/2">
        <div className=" lg:flex gap-9 ">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Name" type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Email" type="text"/>
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Message.." name="" id=""  cols="30" rows="10"/>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-900 hover:bg-slate-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b-glow text-xl text-bold " type="submit">submit </button>
      </form>
    </div>
  )
}

export default Contact