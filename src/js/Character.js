class Character {
  constructor(attack) {
    this.attack = attack;
  }

  setAttack(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }

  getAttack() {
    switch (this.distance) {
      case 1:
        this.calculatedAttack = this.attack;
        break;
      case 2:
        this.calculatedAttack = this.attack * (90 / 100);
        break;
      case 3:
        this.calculatedAttack = this.attack * (80 / 100);
        break;
      case 4:
        this.calculatedAttack = this.attack * (70 / 100);
        break;
      case 5:
        this.calculatedAttack = this.attack * (60 / 100);
        break;
      default:
        this.calculatedAttack = this.attack;
    }
    return this.calculatedAttack;
  }
}

class Mathematical extends Character {
  setStoned(value) {
    if (value) {
      this.stoned = true;
    } else {
      this.stoned = false;
    }
  }

  getStoned() {
    if (this.stoned) {
      this.stonedAtack = this.getAttack() - Math.log2(this.distance) * 5;
    } else {
      this.stonedAtack = this.getAttack();
    }
    return Number((this.stonedAtack).toFixed(1));
  }
}

export class Daemon extends Mathematical {

}

export class Magician extends Mathematical {

}

// let demon = new Daemon();
// console.log(demon.setAttack(100, 2));
//
// console.log(demon.setStoned(true));
// console.log(demon.getStoned())
// console.log(demon.getStoned())
// console.log(demon.getAttack())
