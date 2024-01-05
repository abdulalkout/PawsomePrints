import React from "react";

//-----------------------Components
import Nav from "../../components/nav/Nav";
import Introduction from "../../components/introduction/Introduction";
import AnimalsComponent from "../../components/animalsComponent/AnimalsComponent";
function Home() {
  return (
    <div>
      <Nav />
      <Introduction />
      <AnimalsComponent />
    </div>
  );
}

export default Home;
