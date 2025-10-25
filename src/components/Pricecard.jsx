import React from "react";

function Pricecard() {
  const price = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "5GB Cloud Storage",
        },
        {
          change: "color",
          icon: <i class="fa-solid fa-x"></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class="fa-solid fa-x"></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class="fa-solid fa-x"></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 users, per month",
      list: [
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "Enterprise SLA",
        },
      ],
    },
  ];
  return (
    <>
      <div className="content flex mtop">
        {price.map((val, index) => (
          <div className="box shadow bg" key={index}>
            <div className="topbtn">
              <button className="btn3">{val.best}</button>
            </div>
            <h3>{val.plan}</h3>
            <h1>
              <span>$</span>
              {val.price}
            </h1>
            <p>{val.ptext}</p>
            <ul>
              {val.list.map((i, index) => (
                <li key={index}>
                  <label
                    htmlFor=""
                    style={{
                      background:
                        i.change === "color" ? "#dc35451d" : "#27ae601f",
                      color: i.change === "color" ? "#dc3848" : "#27ae60",
                    }}
                  >
                    {i.icon}
                  </label>
                  <p>{i.text}</p>
                </li>
              ))}
            </ul>
            <button
              className="btn5"
              style={{
                background: val.plan === "Standard" ? "#27ae60": "#fff",
                color: val.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >Start {val.plan}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pricecard;
