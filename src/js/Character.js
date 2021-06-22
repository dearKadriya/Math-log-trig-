class Character {
  constructor(distance) {
    this.distance = distance;
  }

   set attack(attack) {
    this.attackValue = attack;
  }

  get attack() {
    let calculatedAttack = this.attackValue * ((100 - (this.distance - 1) * 10)/100);
    if (this.stonedValue) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }
    return (calculatedAttack < 0) ? 0 : Math.floor(calculatedAttack);
  }
}

class Mathematical extends Character {

  set stoned(value) {
    this.stonedValue = !!value;
  }

  get stoned() {
    return this.stonedValue
  }
}

export class Daemon extends Mathematical {

}

export class Magician extends Mathematical {

}

let demon = new Daemon(2);
demon.attack = 100;
console.log(demon.attack)
// demon.Stoned = true;
// console.log(demon.Stoned)
// console.log(demon.Stoned)
// console.log(demon.Stoned)
//
// console.log(demon.Attack)
