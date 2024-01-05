import React from "react";

function AnimalCard({ animalData }) {
  const { _id, img, name, story, donation } = animalData;
  return (
    <div className="AnimalCard">
      <div className="AnimalInfo">
        <img className src={img} alt="" />
        <h3>{name}</h3>
        <h4>{story}</h4>
      </div>
      <section className="donation">
        <h1>donation</h1>
        <p>${donation}</p>
      </section>
      <a className="LinkButton" href={`/animal/${_id}`}>
        <button>View Animal</button>
      </a>
      <a className="LinkButton donationutton" href={`/animal/donate/${_id}`}>
        <button>Make donation </button>
      </a>
    </div>
  );
}

export default AnimalCard;
