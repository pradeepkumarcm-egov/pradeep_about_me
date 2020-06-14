import React from "react";
import logo from '../../paris.jpg';
import logo1 from '../../logo.svg';
import Task from "../Task/Task";


class Hobbies extends React.Component {
  render()
  {
    const {tasks}=this.props;
    const filteredHobbies=tasks.filter((task)=>{return task.code==="Hobbies"});
    return (
        <Task tasks={filteredHobbies} headerName="Hobbies"/>
    )
  }
}

export default Hobbies;
