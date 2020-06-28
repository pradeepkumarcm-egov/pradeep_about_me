import React from "react";
import AchievementInfo from "./Components/AchievementInfo.js";
import {   BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom";

const project =  {"name":"Projects", "description": "30+"};

class Achievement extends React.Component {

   render()
  {  const {
          project
        } = this;
    const{achievements}=this.props;


    return <div className="horizontal-layout-full">
        {
     achievements.map((key,index)=>{
         return (
           	   <div class="column" key={index}>
          	   <div class="card" >

                  <p><i class="fa fa-user"></i></p>
                  <Link to="/achieve">    <div>{key.name}</div></Link>
                      <div>{key.description}</div>
                </div>
    </div>
   )
 })
 }
 <Router>
 <Switch>
     <Route path="/achieve">
       <AchievementInfo achievements={project}/>
     </Route>
 </Switch>
 </Router>
</div>
}
}

export default Achievement;
