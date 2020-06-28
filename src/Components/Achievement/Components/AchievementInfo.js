import React from "react";

class AchievementInfo extends React.Component{
  render() {
    const {achievements} = this.props;

    return<div className="horizontal-layout-full">
        {
       achievements.map((key, index)=>{
        return <div>
                {key.description}<br/>
                {key.name}
              </div>
        ;
      })
    }

    </div>

  }
}
export default AchievementInfo;
