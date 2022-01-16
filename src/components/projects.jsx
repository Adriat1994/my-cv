import { React } from "react";
import "./projects.css";

const Projects = ({ projects }) => {
    return (
        <div class="projects">
            <h3>Proyectos</h3>
            <div className="projects card">
                {projects.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>                            
                            <p className="title">{item.name}</p>                            
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;