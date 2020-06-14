import React from "react";

class Achievement extends React.Component {
  render()
  {
    const{achievements}=this.props;

    return <div className="horizontal-layout-full">
        {
     achievements.map((key,index)=>{
         return (
           	   <div class="column" key={index}>
          	   <div class="card" >
                  <p><i class="fa fa-user"></i></p>
                      <div>{key.name}</div>
                      <div>{key.description}</div>
                </div>
              </div>
   )
 })
}
</div>
}
}

export default Achievement;
