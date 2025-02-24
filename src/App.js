// src/App.js
import React from "react";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Interests from "./components/Interests";

function App() {
  const {
    name,
    title,
    contact,
    summary,
    experiences,
    projects,
    education,
    technicalSkills,
    professionalSkills,
    languages,
    interests
  } = resumeData;

  return (
    
    <div className="resume-container">
      <Header name={name} title={title} contact={contact} />

      <Summary summary={summary} />


      <div className="resume-columns">
        <aside className="left-col">
          <Experience experiences={experiences} />

          <Projects projects={projects} />
        </aside>
        
        <main className="right-col">
          <Education education={education} />

          <Skills
            technicalSkills={technicalSkills}
            professionalSkills={professionalSkills}
          />

          <Languages languages={languages} />

          <Interests interests={interests} />
        </main>

      </div>

  
 
    </div>
  );
}

export default App;
