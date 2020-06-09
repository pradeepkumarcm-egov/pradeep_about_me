import React from "react";
import "./userinfo.css"

import logo from '../../paris.jpg';

class UserInfo extends React.Component {
  render()
  {
    return (<div>
          <div className="horizontal-row">

      <div className="userImage-box">
        <div className="horizontal-row">
          <div>  <img src={logo} width="100" height="100" className="image-style" >
              </img>
          </div>
                <h4 align="left"> Pradeep Kumar C M <br/><br/> UX Developer</h4>

        </div>
      </div>

          <div className="userurls-box">
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> dribble.com/pradeepkumarcm</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> behance.com/pradeep</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> facebook.com/pradeepkumarcm</h4>
          </div>
        </div>
      </div>)
  }
}

export default UserInfo;
