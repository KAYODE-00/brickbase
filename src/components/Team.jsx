import React from "react";
import Heading from "./Heading";

function Team() {
  const team = [
    {
      list: "50",
      cover: "../images/customer/team-1.jpg",
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "70",
      cover: "../images/customer/team-2.jpg",
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "80",
      cover: "../images/customer/team-3.jpg",
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "51",
      cover: "../images/customer/team-4.jpg",
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "42",
      cover: "../images/customer/team-5.jpg",
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
    {
      list: "38",
      cover: "../images/customer/team-5.jpg",
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [
        <i className="fa-brands fa-facebook-f"></i>,
        <i className="fa-brands fa-linkedin"></i>,
        <i className="fa-brands fa-twitter"></i>,
        <i className="fa-brands fa-instagram"></i>,
      ],
    },
  ];
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location"></i>
                  <label htmlFor="">{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>{" "}
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                      
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
