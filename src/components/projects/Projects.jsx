import './Projects.css';
import { FaChevronRight, FaChevronLeft } from  "react-icons/fa";
import { projects } from '../../data/project';
import { useEffect, useState } from 'react';

const Projects = () => {

    const [ myProjects, setProjects ] = useState([]);
    const [ currentSlide, setCurrentSlide ] = useState(0);

    useEffect(() => {
        setProjects(projects);
    }, []);

    const handleLeftClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(projects.length - 1);
        }
    }

    const handleRightClick = () => {
        if (currentSlide < projects.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    }

    return (
        <div className='projects-container'   id='projects'>
            <div 
                className="project-arrow-box project-arrow-box-left"
                onClick={handleLeftClick}
            >
                <FaChevronLeft className="project-arrow" />
            </div>
            <div className='project-wrapper' style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {
                    myProjects && myProjects.map((project) => {
                        return (
                            <div className='single-project' key={project._id}>
                                <div className="project-left">
                                    <img 
                                        alt='img'
                                        className='project-img' 
                                        src={project.url}
                                    />
                                </div>
                                <div className="project-right">
                                    <div className="project-right-wrapper">
                                        <p className='project-title'>{project.title}</p>
                                        <p className='project-sub-title'>{project.subtitle}</p>
                                        <p className='project-purpose'>{project.purpose}</p>
                                        <p className='project-description'>{project.description}</p>
                                        <p className='project-tech-stack'>{project.techStack}</p>
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className='project-demo'>View Demo</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div 
                className="project-arrow-box project-arrow-box-right"
                onClick={handleRightClick}
            >
                <FaChevronRight className="project-arrow" />
            </div>
        </div>
    )
}

export default Projects;