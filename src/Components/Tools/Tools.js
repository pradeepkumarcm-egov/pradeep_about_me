import React from "react";
import Task from "../Task/Task";

 class Tools extends React.Component {
  render()
  {
    const {tasks}=this.props;
    const filteredTools=tasks.filter((task)=>{return task.code==="Tools"});

    return (
        <Task tasks={filteredTools} headerName="Tools"/>
    )
  }
}

export default Tools;
