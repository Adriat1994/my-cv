import { React } from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
    return (
        <div class="experience">
            <h3>Experiencia laboral</h3>
            <div className="experience card">
                {experience.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p className="title">{item.name}</p>
                            <p>{item.where}</p>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;