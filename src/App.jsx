import { useState } from "react";
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import { CV } from "./CV/CV";
import Projects from "./components/projects";

const { hero, education, experience, languages, habilities, projects } = CV;

function App() {
  const [showEducation, setShowEducation] = useState (true);

  
  return (
    <div className="App">   
      <Hero hero={hero} />
      <About about={hero.aboutMe} />

      <button
        class="boton"
        onClick={() => setShowEducation(true)}
      >
        Estudios
      </button>

      <button
        class="boton"
        onClick={() => setShowEducation(false)}
      >
        Experiencia
      </button>

      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

      


      <More
        languages={languages}
        habilities={habilities}        
	      />

      <Projects projects={projects} />
    </div>
  );
}

export default App;
