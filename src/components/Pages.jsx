import {  Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function Pages() {
  return (
    <div>
      <div className="bgcont"><Header /></div>
      {" "}
      <Routes>
        
        <Route exact path="/" Component={Home} ></Route>
          
     
       
      </Routes>
    </div>
  );
}

export default Pages;
