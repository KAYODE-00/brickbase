import React from "react";

function Back(props) {
  return (
    <>
      <div className="back">
        <div className=" container">
          <span>{props.name}</span>
          <h1>{props.title}</h1>
        </div>
        <img src={props.cover} alt="" />
      </div>
    </>
  );
}

export default Back;
