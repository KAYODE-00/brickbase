import React from "react";
import Back from "./Back";

import Pricecard from "./Pricecard";

function Pricing() {
  return (
    <>
      <section className="services mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={"pricing.jpg"}
        />
        <div className="price container">
          <Pricecard />
        </div>
      </section>
    </>
  );
}

export default Pricing;
