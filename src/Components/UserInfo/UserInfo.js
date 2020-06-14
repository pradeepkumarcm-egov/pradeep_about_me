import React from "react";
import "./userinfo.css"

import logo from '../../paris.jpg';

class UserInfo extends React.Component {
  render()
  {
      const {userInfo}=this.props;

    return (<div>
          <div className="horizontal-row">

      <div className="userImage-box">
        <div className="horizontal-row">
          <div>  <img src={logo} width="100" height="100" className="image-style" >
              </img>
          </div>
                <h4 align="left">{userInfo.name} <br/><br/> {userInfo.designation}</h4>
        </div>
      </div>

          <div className="userurls-box">
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> {userInfo.linkedin}</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img>  {userInfo.gmail}</h4>
            <h4><img src={logo} width="10" height="10" className="image-style" ></img> {userInfo.facebook} </h4>
          </div>
        </div>
      </div>)
  }
}

export default UserInfo;
