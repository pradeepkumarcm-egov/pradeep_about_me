import React from "react";

class Task extends React.Component {
  render() {
    const {tasks,headerName}=this.props;
    return <div className="hobbiestoolskill-box">
    <h3>{headerName}</h3>
      {
        tasks.map((task,index)=>{
          return (
            <div  class="column">
              <p><i class="fa fa-user"></i></p>
               <p key={index}>{task.description}</p>
            </div>
          )
        })
      }

    </div>;
  }
}

export default Task;
