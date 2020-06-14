import React from "react";

class UserIntroduction extends React.Component {
  render()
  {
    const {userIntroduction}=this.props;
    return (  <div className="horizontal-row">
         <div className="userintroduction-box">
            <h4 align="left">
                {userIntroduction}
            </h4>
          </div>

      </div>)
  }
}

export default UserIntroduction;
