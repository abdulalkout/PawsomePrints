class Animal
{
  name;
  species;
  picture;
  animalInfo;
  owner;
  constructor(name, species, picture, animalInfo)
  {
    this.name = typeof name === "string" ? name : "No Name Given";
    this.species = typeof species === "string" ? species : "No Species Given";
    this.picture = typeof picture === "string" ? picture : "https://example.com";
    this.animalInfo = animalInfo instanceof AnimaInfo ? animalInfo : new AnimalInfo();
    this.owner = String(owner);
  }
}



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

class AnimalInfo
{
  description;
  personality;
  health;
  issues;
  story;
  constructor(description, personality, health, issues, story)
  {
    this.description = String(description);
    this.personality = String(personality);
    this.health = String(health);
    this.issues = String(issues);
    this.story = String(story);
  }
}


const animalData = [];

module.exports = animalData;
