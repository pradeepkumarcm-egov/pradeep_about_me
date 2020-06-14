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

class App extends React.Component {
  state = {
      userInfo: {
        name: "Pradeep Kumar C M",
        designation: "Technical Manager",
        gmail: "pradeepkumarcm@gmail.com",
        linkedin: "linkedin.com/in/pradeepkumarcm",
        facebook:"facebook.com/pradeepkumarcm"
      },
      achievements: [
       {"name":"Projects", "description": "30+"},
       {"name":"Mentees", "description":"60+"},
       {"name":"Publications", "description": "14"},
       {"name":"Certificates","description": "10"},
    ],
    experience:{
       code:"Experience",
       name: "eGovernments Foundation",
       description: "13+ years "
     },
     education:{
        code:"Education",
        name: "Kuvempu University",
        description: "Masters in CS",
        batch:"2002-03 Batch"
      },
      tasks:[
        {
          code: "Skills",
          description: "Java, Spring Framework",
        },
        {
          code: "Skills",
          description: "Design MVC",
        },
        {
          code: "Skills",
          description: "Strong Database",
        },
        {
          code: "Tools",
          description: "Postgress",
        },
        {
          code: "Tools",
          description: "Postman",
        },
        {
          code: "Tools",
          description: "Eclipse IDE",
        },
        {
          code: "Hobbies",
          description: "Reading",
        },
        {
          code: "Hobbies",
          description: "Listen Music",
        }
      ],
      userIntroduction:"Working as technical manager in the eGovernments foundation from 13+ years experience. Handled major challanges in implementing multiple cities across the country. Developing platform  which will support the municipal eGovernance. Eg: Public grievance redressal, property tax, trade license etc."
    };
render() {
  const {userInfo={},achievements=[],experience={},education={},tasks=[],userIntroduction={}}=this.state;
  return (
    <div>
      <UserInfo userInfo={userInfo} />
      <Achievement achievements={achievements}/>
      <UserIntroduction userIntroduction={userIntroduction}/>
      <div className="horizontal-row"> <Experience experience={experience} /> <Education education={education}/> </div>
     <div className="horizontal-row">  <Skills tasks={tasks}/> <Tools tasks={tasks}/><Hobbies tasks={tasks}/></div>
    </div>
  );
 }
}
export default App;
