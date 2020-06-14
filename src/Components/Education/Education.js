import React from "react";

class Education extends React.Component {
  render()
  {
    const {education}=this.props;
    return (<div class="row">
    <div className="education-box">
              <div class="column">
                <div class="card">
                  <p><i class="fa fa-user"></i></p>
                   <h3 >{education.code}</h3>
               <h4 align="left">{education.name}</h4>
                 <p align="left">{education.description}</p>
                 <p align="left">{education.batch}</p>
             </div>
              </div>
   </div>
  </div> )
  }
}

export default Education;
