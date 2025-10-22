import Awards from "./Awards";
import Featured from "./Featured";
import Hero from "./Hero";
import Recent from "./Recent";

function Home() {
  return (
    <div >
      <Hero />
      <Featured/>
      <Recent/>
      <Awards/>
    </div>
  );
}

export default Home;
