import React from 'react'

function AnimalSelect(props) 
{
  /*
  const animalsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discription: { type: String, required: true },
    Donation: { type: Number, required: false },
    story: { type: String, required: false },
    img: { type: String, required: false },
    helth: { type: String, required: false },
  });
  */
  
  const { animalData } = props;
  const { _id, pictureUrl, name, species, donations, description, story, health} = animalData;
  
  return (
    <main>
      <section className='AnimalInformation'>
        <img src={pictureUrl} alt="" />
        <div className='Name'>
          <h2>{name}</h2>
          <h3>{species}</h3>
        </div>
        <div className='Donations'>
          <span>Amount Donated</span>
          <span>{donations}</span>  
        </div>
        <a className="LinkButton DonationButton" href={`/animal/donate/${_id}`}><button>Donate</button></a>
      </section>
      <section className='AnimalDescription'>
        <div className='Description'></div>
        <div className='Story'></div>
        <div className='Health'></div>
      </section>
    </main>
  )
}

export default AnimalSelect
