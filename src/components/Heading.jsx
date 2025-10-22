import React from "react";

function Heading(props) {
  return (
    <div>
      <div className="heading">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Heading;
