import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function ComponentA() {
return (
<div>
    <div className="container">
    <ComponentB heading= "Enter the text"/>
    </div>
    <div className="container">
    <ComponentC />
    </div>

</div>
);
}

export default ComponentA;

