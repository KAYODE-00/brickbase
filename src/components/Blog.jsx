import React from "react";
import Back from "./Back";
import RecentCard from "./RecentCard";

function Blog() {
  return (
    <>
      <section className="blog-out mb">
        <Back
          name="Blog"
          title="Blog Grid -Our Blogs"
          cover={"about.jpg"}
        />
        <div className="container recent">
          <RecentCard/>
        </div>
      </section>
    </>
  );
}

export default Blog;
