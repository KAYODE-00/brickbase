import React from "react";
import Heading from "./Heading";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  return (
    <div>
      <section className="featured background"  >
        <div className="container">
            <Heading title='Featured Property Types' subtitle='Find All Types Of Property.' />
            <FeaturedCard/>

        </div>
      </section>
    </div>
  );
}

export default Featured;
