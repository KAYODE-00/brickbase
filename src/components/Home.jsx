import Awards from "./Awards";
import Featured from "./Featured";
import Hero from "./Hero";
import Location from "./Location";
import Price from "./Price";
import Recent from "./Recent";
import Team from "./Team";

function Home() {
  return (
    <div >
      <Hero />
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Team/>
      <Price/>
    </div>
  );
}

export default Home;
