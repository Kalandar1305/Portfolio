import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Aos from "aos";

const Project = () => {
  useEffect( ()=>{
    Aos.init({
      duration: 1000,
    });
  }, [])
    
  const projects = [
    {
      title: "kalandar-portfolio",
      description:
        "Within my portfolio, I have crafted a dynamic showcase of my skills,experiences, and projects, serving as both a testament to my capabilities and a hub for exploring my diverse work in web development..",
      githubLink: "https://github.com/Kalandar1305/Portfolio",
      skills: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    },
    {
      title: "VIBE",
      description:
        "Step into the world of VIBE, where stunning design meets seamless functionality – a dynamic webpage crafted with HTML, CSS, and Bootstrap to deliver a captivating and immersive user experience",
      githubLink: "https://github.com/Kalandar1305/VIBE",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Jquery"],
    },
    {
      title: "DCS for Sales Strategy",
      description:
        "Revolutionizing e-commerce feedback analysis, this project integrates web scraping, ML sentiment analysis, and dynamic pricing predictions to empower manufacturers with actionable insights for optimizing product quality and competitiveness.",
      githubLink: "https://github.com/Kalandar1305/DCS_for_sales-strategy",
      skills: ["Python", "Pandas Dataframe", "Spark Dataframe", "Nifi"],
    },
    {
      title: "Broadband",
      description:
        "A dynamic broadband management website with SQL integration empowers admins for seamless account control and status checks, while enabling users to register for broadband plans and conveniently handle bill payments.",
      githubLink: "https://github.com/Kalandar1305/BroadbandBack-main",
      skills: ["Mysql", "DataBase Management ", "C#"],
    },
    {
      title: "Pedestrian Detection",
      description:
        "An innovative pedestrian detection project leveraging YOLOv4 Tiny model for real-time identification of pedestrians in video feeds, whether from a webcam or video file, enhancing surveillance and safety measures",
      githubLink: "https://github.com/Kalandar1305/Pedestrian_detection",
      skills: ["Python", "Yolov4 Tiny"],
    },
  ];

  return (
    <div
      id="Project"
      className="p-20 flex flex-col items-center justify-center "
    >
      <h1 className="text-[52px] font-semeibold mb-20 leading-normal uppercase text-fuchsia-500" data-aos="fade-right">
        Projects
      </h1>
      <div className="px-20 flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
