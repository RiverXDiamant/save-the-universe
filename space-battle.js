// * Game of Battling Alien Spaceships

// ===== Game Player/Enemy setup

/* = Good Guys: USS HelloWorld (amount: 1)
    Properties: 1. hull - (20)
                2. firepower - (5)
                3. accuracy - (0.7)
     Mission: Destroy every alien ship
     Weapons: Lasers
     Strengths: Attacks first
     Weakness: Can only attack the Aliens in order
    ~ After destroying an Alien ship, has the option of retreating

*/

/* = Enemies: Aliens (amount: 6)
      Properties: 1. hull - between (3) and (6)
                  2. firepower - (2) and (4)
                  3. accuracy - (0.6) and (0.8)
     Mission: Destroy USS HelloWorld
     Weakness: - Can only only attack using one Alien ship at a time
    ~ Waits to see the outcome of the battle before deploying another Alien ship 
*/

// * == Ships
// *    a. hull - (same as hp; if hull reaches 0, the ship is destroyed)
// needs message that "Ship has been destroyed" when hull reaches 0
// *    b. firepower - (amount of damage done to the hull of the target with a successful hit)
// needs message for a successful hit "USS HelloWorld has hit the <target> for <x amount> of damage"
// *    c. accuracy - (chance between 0 and 1 that the ship will hit its target)

// const earthShip = {
//   name: "USS Hello World",
//   hull: 20,
//   weapons: "Laser",
//   firepower: 5,
//   accuracy: 0.7,
//   alive: true,
// };

//  class Earth Ship
// created a class for Earth Ships for option to make more ships in the future

class EarthShip {
  constructor(name) {
    (this.name = name),
      (this.hull = 20),
      (this.firepower = 5),
      (this.accuracy = 0.7),
      (this.alive = true);
  }
  attack() {
    let attDamage = Math.round(this.firepower - this.accuracy / 100);
    for (let i = 0; i < alienShipArr.length; i++) {
      if (ussHelloWorld.attack) {
        console.log(
          `${this.name} has attacked ${alienShipArr[i].name} for ${attDamage} points!`
        );
      }
      if (alienShipArr.alive === true) {
        ussHelloWorld.attack++;
      } else if (alienShipArr === false) {
        return;
      }
    }
  }
  damage() {
    this.hull -= Math.random() * (0.8 - 0.6) + 0.6;
    console.log(
      `${this.name} has taken ${alienShipArr.firepower} points in damage! Hull integrity is at ${this.hull}.`
    );
    if (this.hull === 0) {
      this.alive = false;
      console.log(
        `${this.name} has taken too much damage! ${this.name} has been destroyed!`
      );
    }
  }
  retreat() {
    if (this.name == this.attack) {
      document.addEventListener("click", (event) => {
        // need retreat button
      });
    }
    if (this.retreat == true) {
      console.log(`${this.name} loses! A Time Paradox has been created!`);
    }
  }
}

// new EarthShip Instance
const ussHelloWorld = new EarthShip("USS HelloWorld", 20, 5, 0.7);
// console.log(ussHelloWorld); // output works properly

// Aliens Class

class AlienShips {
  constructor(name, hull, firepower, accuracy) {
    (this.name = name),
      (this.hull = hull),
      (this.firepower = firepower),
      (this.accuracy = accuracy),
      (this.alive = true);
  }
  attack() {
    let alienAttackDamage = this.firepower - this.accuracy / 100;
    for (let i = 0; i < 1; i++) {
      if (alienShipArr[i].attack) {
        console.log(
          `${this.name} has attacked ${ussHelloWorld.name} for ${alienAttackDamage} points.`
        );
      }
    }
  }
  damage() {
    this.hull -= 5;
    console.log(
      `${this.name} has taken ${ussHelloWorld.firepower} points in damage.`
    );
    if (this.hull === 0) {
      this.alive = false;
      console.log(
        `${this.name} has taken too much damage! ${this.name} has been destroyed!`
      );
    }
  }
}

// ==========
// using Math.trunc() to get rid of trailing decimals
// I spent way too much time trying to figure out how to get rid of trailing decimals for the accuracy property.
// I assigned the randomized accuracy to a variable
const accuracy1 = Math.random() * (0.8 - 0.6) + 0.6; // variable value the accuracy params provided
const accuracy2 = Math.random() * (0.8 - 0.6) + 0.6;
const accuracy3 = Math.random() * (0.8 - 0.6) + 0.6;
const accuracy4 = Math.random() * (0.8 - 0.6) + 0.6;
const accuracy5 = Math.random() * (0.8 - 0.6) + 0.6;
const accuracy6 = Math.random() * (0.8 - 0.6) + 0.6;

// console.log(accuracy);

// Using exponential notation to round to a certain decimal place
// credit to this medium article: https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
// credit to programmer who wrote it: https://gist.github.com/djD-REK/068cba3d430cf7abfddfd32a5d7903c3

// ==  Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

const roundAccuracy = (accuracy, decimalPlaces) =>
  Number(Math.round(accuracy + "e" + decimalPlaces) + "e-" + decimalPlaces);

// console.log(roundAccuracy(accuracy, 2));

// ===========

// Aliens array
const alienShipArr = [];

const alienShip1 = new AlienShips(
  "Andromedon One",
  Math.trunc(Math.random() * (6 - 3) + 3), // using Math.trunc() to get rid of trailing decimals for hull and firepower
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy1, 2) // input accuracy and decimal place place into roundedAccuracy(variable, decimal place)
);
const alienShip2 = new AlienShips(
  "Andromedon Two",
  Math.trunc(Math.random() * (6 - 3) + 3),
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy2, 2) * 1
);
const alienShip3 = new AlienShips(
  "Andromedon Three",
  Math.trunc(Math.random() * (6 - 3) + 3),
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy3, 2)
);
const alienShip4 = new AlienShips(
  "Andromedon Four",
  Math.trunc(Math.random() * (6 - 3) + 3),
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy4, 2)
);
const alienShip5 = new AlienShips(
  "Andromedon Five",
  Math.trunc(Math.random() * (6 - 3) + 3),
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy5, 2)
);
const alienShip6 = new AlienShips(
  "Andromedon Six",
  Math.trunc(Math.random() * (6 - 3) + 3),
  Math.trunc(Math.random() * (4 - 2) + 2),
  roundAccuracy(accuracy6, 2)
);

for (let i = 0; i < 1; i++) {
  alienShipArr.push(
    alienShip1,
    alienShip2,
    alienShip3,
    alienShip4,
    alienShip5,
    alienShip6
  );
}

// console.log(alienShipArr); // output works properly
/* ===== Game Round setup

    1. You attack the first alien ship
    2. If the ship survives, it attacks you
    3. If you survive, you attack the ship again
    4. If it survives, it attacks you again … etc
    5. If you destroy the ship, you have the option to attack the next ship or to retreat
    6. If you retreat, the game is over, perhaps leaving the game open for further developments or options
    7. You win the game if you destroy all of the aliens
    8. You lose the game if you are destroyed
 */

// const spaceBattle = {
//   round: 3,
//   start() {},
// };

// for (let i = 0; i < alienShipArr.length; i++) {
//   if (ussHelloWorld.attack) {
//     console.log(`${this.name} has attacked ${alienShipArr[i].name}!`);
//   }
//   if (alienShipArr.alive === true) {
//     ussHelloWorld.attack++;
//   } else if (alienShipArr === false) {
//     return;
//   }
// }

// ussHelloWorld.attack(alienShipArr[1]);

// console.log(alienShipArr[1]);
// ussHelloWorld.attack();
// alienShipArr[1].attack();
