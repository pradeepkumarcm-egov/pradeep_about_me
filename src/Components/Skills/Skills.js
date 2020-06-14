import React from "react";
import "./skills.css"
import Task from "../Task/Task";

class Skills extends React.Component {
  render()
  {
    const {tasks}=this.props;
    const filteredSkills=tasks.filter((task)=>{return task.code==="Skills"});

    return (
<Task tasks={filteredSkills} headerName="Skills"/>
    )
  }
}

export default Skills;
