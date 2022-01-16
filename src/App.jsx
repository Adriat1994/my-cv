//import { userStates } from "react";
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  //const [showEducation, setShowEducation] = userStates(true);
  
  return (
    <div className="App">   
      <Hero hero={hero} />
      <About about={hero.aboutMe} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}        
	      />
    </div>
  );
}

export default App;
