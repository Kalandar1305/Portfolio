import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";


const Contact = () => {
  useEffect( ()=>{
    Aos.init({

      duration: 1000,
    });
  }, [])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Kalandar',
        message: message,
      }
      
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    }
    catch (error) {
      console.error(error);
    }
}

  return (
    <div id="Contact" className="p-4  lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left "className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500">Contact me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap=2 lg:w-1/2">
        <div className=" lg:flex gap-9 ">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder="Enter your Message.." name="" id=""  cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-900 hover:bg-slate-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b-glow text-xl text-bold " type="submit">submit </button>
      </form>
    </div>
  )
}

export default Contact