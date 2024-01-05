class Animal
{
  name;
  picture;
  animalInfo;
  constructor(name, picture, animalInfo)
  {
    this.name = typeof name === "string" ? name : "No Name Given";
    this.picture = typeof picture === "string" ? picture : "https://example.com";
    this.animalInfo = animalInfo instanceof AnimaInfo ? animalInfo : new AnimalInfo();
  }
}

class AnimalInfo
{
  constructor()
  {
  
  }
}


const animalData = [

  
];
