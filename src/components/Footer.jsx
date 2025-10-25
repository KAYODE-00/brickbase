import React from "react";

function Footer() {
  const footer = [
    {
      title: "LAYOUTS",
      text: [
        { list: "Home Page" },
        { list: "About Page" },
        { list: "Service Page" },
        { list: "Property Page" },
        { list: "Contact Page" },
        { list: "Single Blog" },
      ],
    },
    {
      title: "ALL SECTIONS",
      text: [
        { list: "Headers" },
        { list: "Features" },
        { list: "Attractive" },
        { list: "Testimonials" },
        { list: "Videos" },
        { list: "Footers" },
      ],
    },
    {
      title: "COMPANY",
      text: [
        { list: "About" },
        { list: "Blog" },
        { list: "Pricing" },
        { list: "Affiliate" },
        { list: "Login" },
        { list: "Changelog" },
      ],
    },
  ];

//   const today = new Date();

//   const year = today.getFullYear();

// const formattedDate = {year}
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help You to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="logo-light.png" alt="" />
              <h2>Do You Need Help With Anything</h2>
              <p>
                Receive updates ,hot deals,tutorials,discounts sent straight in
                your inbox every month.
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Suscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((i, index) => (
                  <li key={index}>{i.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>©{new Date().getFullYear()} BrickBase. Designed By Kayode.</span>
      </div>
    </>
  );
}

export default Footer;
