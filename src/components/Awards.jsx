import React from "react";
import Heading from "./Heading";

function Awards() {
 const awards = [
  {
    icon: <i className='fa-solid fa-trophy'></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className='fa-solid fa-briefcase'></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className='fa-solid fa-lightbulb'></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className='fa-solid fa-heart'></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
]

  return (
    <div>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,240,000+ Happy User Being With Us Still. They Love Our Services"
            subtitle="Our Awards"
          />

          <div className="content grid4 mtop">
            {awards.map((val,index) => (
                <div className="" key={index}>
                    <div className="icon">
                        <span>{val.icon}</span>
                    </div>
                    <h1>{val.num}</h1><p>{val.name}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;
