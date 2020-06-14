import React from "react";

class Experience extends React.Component {
  render()
  {
    const {experience}=this.props;
    return (<div class="row">
    <div className="experience-box">
              <div class="column">
                <div class="card">
                  <p><i class="fa fa-user"></i></p>
                   <h3 >{experience.code}</h3>
               <h4 align="left">Overall Experience</h4>
                 <p align="left">{experience.name}</p>
                 <p align="left">{experience.description}</p>
             </div>
              </div>
   </div>
  </div>)
  }
}

export default Experience;
