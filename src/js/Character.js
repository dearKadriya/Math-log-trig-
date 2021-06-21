class Character {
  constructor(distance) {
    this.distance = distance;
  }

   set attack(attack) {
    this.attack = attack;

  }

  get attack() {
    let calculatedAttack = this.attack * ((100 - (this.distance - 1) * 10)/100);
    if (this.stoned) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }
    return (calculatedAttack < 0) ? 0 : Math.floor(calculatedAttack);
  }
}

class Mathematical extends Character {

  set stoned(value) {
    this.stoned = !!value;
  }

  get stoned() {
    return this.stoned
  }
}

export class Daemon extends Mathematical {

}

export class Magician extends Mathematical {

}
//
// let demon = new Daemon(2);
// demon.Attack = 100;
//
// demon.Stoned = true;
// console.log(demon.Stoned)
// console.log(demon.Stoned)
// console.log(demon.Stoned)
//
// console.log(demon.Attack)
