import React from "react";
import Heading from "./Heading";
import Pricecard from "./Pricecard";

function Price() {
  return (
    <>
      <section className="price padding">
        <div className="container">
            <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
       <Pricecard/>
        </div>
      </section>
    </>
  );
}

export default Price;
