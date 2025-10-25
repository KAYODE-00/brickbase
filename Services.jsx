import Back from "./src/components/Back";
import FeaturedCard from "./src/components/FeaturedCard";

function Services() {
  return (
    <>
      <section className="services mb">
        <Back
          name="Services"
          title="Services -All Services"
          cover={"services.jpg"}
        />
        <div className="featured container">
            <FeaturedCard/>
        </div>
      </section>
    </>
  );
}

export default Services;
