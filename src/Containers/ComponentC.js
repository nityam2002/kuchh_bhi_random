import React from "react";
import { useSelector } from "react-redux";

function ComponentC() {
const value = useSelector((state) => state.value);

return (
<div className="card">
  <div className="card-body">
    {value}
  </div>
</div>
);
}

export default ComponentC;

