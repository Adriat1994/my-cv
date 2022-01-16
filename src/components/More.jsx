import { React } from "react";
import "./More.css";

const More = ( more ) => {
    return (
    <div class="more">
        <h3>Idiomas</h3>
        <div className="card">
                {more.languages.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p>{item.language}</p>
                        </div>
                    );
                })}
        </div>       
        
        <h3>Habilidades</h3>
        <div>
            <div className="card">
                {more.habilities.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p className="name">{item}</p>                            
                        </div>
                    );
                })}
            </div>
        </div>
    </div>        
    );
};

export default More;