import React from "react";
import { useDispatch } from "react-redux";

function ComponentB(props) {
const dispatch = useDispatch();

const handleChange = (event) => {
dispatch({
type: "SET_VALUE",
payload: event.target.value,
});
};

return (
/* <div>
<input type="text" onChange={handleChange} />
// </div> */


<div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">{props.heading}</span> 
  <input type="text" className="form-control" onChange={handleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>



);
}

export default ComponentB;