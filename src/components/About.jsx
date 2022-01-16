import { React } from "react";
import "./About.css";

const About = ({ about }) => {
    return (
        <div class="about">
            <div>
                <h3>Sobre mi</h3>
            </div>
            <div className="card">
                {about.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p className="info">{item.info}</p>                                                      
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default About;