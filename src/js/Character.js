export default class Character {
  constructor(name, type, attack, protection) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.type = type;
    this.attack = attack;
    this.protection = protection;
  }
}
