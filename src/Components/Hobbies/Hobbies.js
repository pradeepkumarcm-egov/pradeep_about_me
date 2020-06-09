import React from "react";
import logo from '../../paris.jpg';
import logo1 from '../../logo.svg';


class Hobbies extends React.Component {
  render()
  {
    return (
    <div className="skill-box">
              <div class="column">
                <div class="card">
                  <p><i class="fa fa-user"></i></p>
                   <h3 >Hobbies</h3>
                 <p align="left"><img src={logo} width="20" height="20" className="image-style" ></img></p>
                 <p align="left"><img src={logo1} width="30" height="20" className="image-style" ></img></p>
                 <p align="left"><img src={logo} width="20" height="20" className="image-style" ></img></p>
             </div>
              </div>
 
  </div>)
  }
}

export default Hobbies;
