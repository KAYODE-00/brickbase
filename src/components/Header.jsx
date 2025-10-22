import { useState } from "react";
import { Link } from "react-router-dom"


function Header() {
const [navlist,setNavlist] = useState(false)
const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
]

  return (
    <div>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <div className="nav">
            <ul className={` ${navlist ? `small` : `flex`} `}>
              {nav.map((list,index) => (
                <li key={index} >
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ) ) }
            </ul>
          </div>

          <div className="button flex">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1" >
              <i className="fa fa-sign"></i> Sign In
            </button>
          </div>

        <div className="toggle">
            <button onClick={() => setNavlist(!navlist)}>
            <i className={`${navlist ? `fa fa-times` :`fa fa-bars` } `}></i>
          </button>
        </div>

        </div>
      </header>
    </div>
  );
}

export default Header;
