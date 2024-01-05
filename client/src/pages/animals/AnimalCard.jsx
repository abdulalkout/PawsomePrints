import React from 'react'

function AnimalCard(props) 
{
  const { animalData } = props;
  const { _id, pictureUrl, name, species, donations } = animalData;
  return (
    <div className="AnimalCard">
      <div className="AnimalInfo">
        <img className src={pictureUrl} alt="" />
        <h3>{name}</h3>
        <h4>{species}</h4>
      </div>
      <section className='Donations'>
        <h1>Donations</h1>
        <p>${donations}</p>
      </section>
      <a className='LinkButton' href={`/animal/${id}`}><button>View Animal</button></a>
      <a className='LinkButton DonationButton' href={`/animal/donate/${id}`}><button>Make Donation</button></a>
    </div>
  )
}

export default AnimalCard;
