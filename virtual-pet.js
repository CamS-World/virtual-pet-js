class VirtualPet {
  constructor(name, desc, hunger, thirst) {
    this.name = name;
    this.desc = desc;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  feed() {
    this.hunger -= 5;
    this.thirst += 10;
  }

  watered() {
    this.thirst -= 5;
    this.hunger += 10;
  }
}

export default VirtualPet;
