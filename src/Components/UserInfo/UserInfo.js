import React from "react";
import "./userinfo.css"

import logo from '../../paris.jpg';

class UserInfo extends React.Component {
  render()
  {
    return (<div>
         <div className="horizontal-layout">

      <div className="userImage-box">

              <h4 align="left"><img src={logo} width="100" height="100" className="image-style" >
              </img> Pradeep Kumar C M </h4>
                 <h4 align="center"> UX Developer</h4>

          </div>

          <div className="userImage-box">
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> dribble.com/pradeepkumarcm</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> behance.com/pradeep</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> facebook.com/pradeepkumarcm</h4>
          </div>
        </div>
      </div>)
  }
}

export default UserInfo;
