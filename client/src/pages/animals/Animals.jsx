import React from 'react'
import Nav from "../../components/nav/Nav";
import AnimalCard from './AnimalCard';

function Animals(props) 
{
  const { animals = [] } = props;
  
  return (
    <>
      <Nav />
      <main>
        <section className="AnimalsList">
          { animals.map((animal, index) => <AnimalCard key={index} animalData={animal}/>) }      
        </section>
      </main>
    </>
  )
}

export default Animals;
