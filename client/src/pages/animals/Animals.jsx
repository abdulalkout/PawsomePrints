import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import AnimalCard from "./AnimalCard";
import "./Animals.css";
import "./AnimalCard.css";


function Animals() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    const bringapi = async () => {
      try {
        const response = await fetch("/allanimals");
        const data = await response.json();
        setAnimals(data.animals);
        console.log(data.animals);
      } catch (err) {
        console.log("err when fetching devcoops");
      }
    };

    bringapi();
  }, []);
  // const animals = [
  //   {
  //     name: "cat",
  //     description: "kihsbvikbsvikbsvslv",
  //     donation: 50,
  //     story: "hadknvcsnvnmdvpnspvisjnvpijspiv",
  //     img: "https://cdn2.wanderlust.co.uk/media/1027/cropped-shutterstock_170799332.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132204600710000000",
  //     helth: "ohnfsohno oinf oinoin opinopn oin",
  //   },
  //   {
  //     name: "cat",
  //     description: "kihsbvikbsvikbsvslv",
  //     donation: 50,
  //     story: "hadknvcsnvnmdvpnspvisjnvpijspiv",
  //     img: "https://cdn2.wanderlust.co.uk/media/1027/cropped-shutterstock_170799332.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132204600710000000",
  //     helth: "ohnfsohno oinf oinoin opinopn oin",
  //   },
  //   {
  //     name: "cat",
  //     description: "kihsbvikbsvikbsvslv",
  //     donation: 50,
  //     story: "hadknvcsnvnmdvpnspvisjnvpijspiv",
  //     img: "https://cdn2.wanderlust.co.uk/media/1027/cropped-shutterstock_170799332.jpg?anchor=center&mode=crop&width=650&height=0&rnd=132204600710000000",
  //     helth: "ohnfsohno oinf oinoin opinopn oin",
  //   },
  // ];
  return (
    <>
      <Nav />
      <main>
        <section className="AnimalsList">
          {animals.map((animal, index) => (
            <AnimalCard key={index} animalData={animal} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Animals;
