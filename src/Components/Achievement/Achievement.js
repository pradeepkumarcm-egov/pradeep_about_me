import React from "react";

class Achievement extends React.Component {
  render()
  {
    return (
         <div className="horizontal-layout-full">
           <div class="column">
            <div class="card">
              <p><i class="fa fa-user"></i></p>
              <h3>30+</h3>
              <p>Projects</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><i class="fa fa-check"></i></p>
              <h3>60+</h3>
              <p>Mentees</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <p><i class="fa fa-user"></i></p>
              <h3>14</h3>
              <p>Publications</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><i class="fa fa-check"></i></p>
              <h3>10</h3>
              <p>Certificates</p>
            </div>
          </div>
        </div>
       )
  }
}

export default Achievement;
