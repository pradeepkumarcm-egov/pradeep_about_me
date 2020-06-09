import React from 'react';
import UserInfo from "./Components/UserInfo/UserInfo";
import Achievement from "./Components/Achievement/Achievement";
import UserIntroduction from "./Components/UserIntroduction/UserIntroduction";
import Skills from "./Components/Skills/Skills";
import Tools from "./Components/Tools/Tools";
import Hobbies from "./Components/Hobbies/Hobbies";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";

import './App.css';

function App() {
  return (
    <div>
      <UserInfo/>
      <Achievement/>
      <UserIntroduction/>
      <div className="horizontal-row"> <Experience/> <Education/> </div>
     <div className="horizontal-row">  <Skills/> <Tools/><Hobbies/></div>
    </div>
  );
}

export default App;
