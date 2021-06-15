class Character {
  constructor(distance) {
    this.distance = distance;
  }

   set Attack(attack) {
    this.attack = attack;

  }

  get Attack() {
    let calculatedAttack = this.attack * ((100 - (this.distance - 1) * 10)/100);
    if (this.stoned) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }
    return (calculatedAttack < 0) ? 0 : Math.floor(calculatedAttack);
  }
}

class Mathematical extends Character {

  set Stoned(value) {
    this.stoned = !!value;
  }

  get Stoned() {
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
