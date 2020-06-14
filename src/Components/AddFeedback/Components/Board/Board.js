import React from "react";

class Board extends React.Component {

  render() {
    const {feedbacks=[]}=this.props;
    return <div className="horizontal-layout-full">
  <h3>  Existing Feedbacks</h3>
        {
     feedbacks.map((key,index)=>{
         return (
           	   <div class="card" key={index}>
                   <p><i class="fa fa-user"></i></p>
                    Name:  <div>{key.name}</div><br/>
                    Rating:  <div>{key.rating}</div><br/>
                    Description:  <div>{key.description}</div>
               </div>
   )
 })
}
</div>
}
}
export default Board;
