import React from "react";
import "./AnimalsComponent.css";
import { Link } from "react-router-dom";

function AnimalsComponent() {
  return (
    <div className="animal-section">
      <h3>Check these animals out</h3>
      <img src="https://cdn2.wanderlust.co.uk/media/1027/cropped-shutterstock_170799332.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132204600710000000" />
      <p>
        We have a collection of animals that you will not see every dat, Having
        one is exciting too, Cleck bellow to choose one and donait
      </p>
      <Link to="/animals" className="nav-links">
        <button>Animals</button>
      </Link>
    </div>
  );
}

export default AnimalsComponent;
