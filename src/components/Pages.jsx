import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Services from "../../Services";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Contact from "./Contact";

function Pages() {
  return (
    <>
      <Header />{" "}
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>{" "}
        <Route exact path="/Services" Component={Services}></Route>
         <Route exact path="/Blog" Component={Blog}></Route>
          <Route exact path="/Pricing" Component={Pricing}></Route>
          <Route exact path="/Contact" Component={Contact}></Route>
      </Routes>{" "}
      <Footer />
    </>
  );
}

export default Pages;
