import React from "react";
import Heading from "./Heading";
import RecentCard from "./RecentCard";

function Recent() {
  return (
    <div>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Our properties that are listed recently."
          />
        </div>{" "}
        <RecentCard />
      </section>
    </div>
  );
}

export default Recent;
