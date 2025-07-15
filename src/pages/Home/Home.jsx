import React from "react";
import Banner from "./Components/Banner";
import DesignEngineering from "./Components/DesignEngineering";
import Portfolio from "./Components/Portfolio";
import BrandValues from "./Components/BrandValues";
import Construction from "./Components/Construction";
import WhatweDo from "./Components/WhatweDo";
import Strategy from "./Components/Strategy";
import Crafting from "./Components/Crafting";
import Contactus from "./Components/Contactus";

const Home = () => {
  return (
    <div>
      <Banner />
      <DesignEngineering />
      <Portfolio />
      <BrandValues />
      <Construction />
      <WhatweDo />
      <Strategy />
      <Crafting />
      <Contactus />
    </div>
  );
};

export default Home;
