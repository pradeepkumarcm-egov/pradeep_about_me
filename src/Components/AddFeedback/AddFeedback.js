import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class AddFeedback extends React.Component {
  render() {
    const {feedback={},rating=[],addFeedback,handleChangeName,handleChangeRating,handleChangeDescription}=this.props;
    console.log("add feedback",this.props);
    return <div>
    <h2>Add Feedback</h2>
    <form>
       <TextField value={feedback.name}   onChange={(e)=>{
         console.log(e.target.value);
         handleChangeName(e.target.value)
       }} id="standard-basic" label="Name" />
        {}

      <br/>
      <br/>

      <label>
        Rating
        <select onChange={(e)=>{
          console.log(e.target.value);
          handleChangeRating(e.target.value)
        }}>
          {
            rating.map((rate,rateIndex)=><option key={rateIndex} value={rate.code}>{rate.code}</option>)
          }
        </select>
      </label>
      <br/>
      <br/>

      <label>
        Description
        <textarea onChange={(e)=>{
          console.log(e.target.value);
          handleChangeDescription(e.target.value)
        }} value={feedback.description}/>
      </label>
      <br/>
      <br/>

      <Button  onClick={(e)=>{
        e.preventDefault()
        addFeedback(feedback)
      }} variant="contained" color="primary">
        Submit Feedback
      </Button>
    </form>

    </div>;
  }
}

export default AddFeedback;
