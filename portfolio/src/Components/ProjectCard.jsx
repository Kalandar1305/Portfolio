
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Aos from "aos";


const ProjectCard = ({ title, description, githubLink, skills,index }) => {
  const [showTechnologies, setShowTechnologies] = useState(false);

  const toggleTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };

  useEffect( ()=>{
    Aos.init({
      duration: 1000,
    });
  }, [])
    
  const getAOSDirection = () => {
    return index % 2 === 0 ? "fade-right" : "fade-left";
  };
    return (
      
    <div className="max-w-md mx-4 my-8 p-10 shadow-md rounded-md text-center rounded-ss-3xl rounded-br-3xl border-2 b-glow" data-aos={getAOSDirection()} >
      <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
      <p className="text-white text-lg  mb-6">{description}</p>
      <div className="flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden"
        >
          Github
        </a>

        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden"
          onClick={toggleTechnologies}
        >
          Skills
        </button>
      </div>

      {showTechnologies && (
        <div className="text-right mt-4 text-white">
          <ul>
            
            {skills.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,    
  };

export default ProjectCard;
