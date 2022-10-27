// * Game of Battling Alien Spaceships - console.log() game

// ===== Game Player/Enemy setup

/* = Good Guys: USS HelloWorld (amount: 1)
    Properties: 1. hull - (20)
            2. firepower -5
            3. accuracy - 0.7
     Mission: Destroy every alien ship
     Weapons: Lasers
     Strengths: Can attack first
     Weakness: Can only attack the Aliens in order
    ~ After destroying an Alien ship, has the option of retreating

*/

/* = Enemies: Aliens (amount: 6)
     Mission: Destroy USS HelloWorld
     Weakness: - Can only only attack using one Alien ship at a time
    ~ Waits to see the outcome of the battle before deploying another Alien ship 


*/

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

// * == Ships
// *    a. hull - (same as hp; if hull reaches 0, the ship is destroyed)
// needs message that "Ship has been destroyed" when hull reaches 0
// *    b. firepower - (amount of damage done to the hull of the target with a successful hit)
// needs message for a successful hit "USS HelloWorld has hit the <target> for <x amount> of damage"
// *    c. accuracy - (chance between 0 and 1 that the ship will hit its target)

// * Create variable Human ship
const earthShip = {
  name: "USS Hello World",
  hull: 20,
  weapons: "Laser",
  firepower: 5,
  accuracy: 0.7,
  alive: true,
};

console.log(earthShip);

// * Create class for Aliens

class AlienShips {
  constructor(name, hull, firepower, accuracy) {
    (this.name = name),
      (this.hull = hull),
      (this.firepower = firepower),
      (this.accuracy = accuracy),
      (this.alive = true);
  }
}

const alienShipArr = [];

const alienShip1 = new AlienShips(
  "Andromedon One",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
);
const alienShip2 = new AlienShips(
  "Andromedon Two",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
);
const alienShip3 = new AlienShips(
  "Andromedon Three",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
);
const alienShip4 = new AlienShips(
  "Andromedon Four",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
);
const alienShip5 = new AlienShips(
  "Andromedon Five",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
);
const alienShip6 = new AlienShips(
  "Andromedon Six",
  Math.random() * (6 - 3) + 3,
  Math.random() * (4 - 2) + 2,
  Math.random() * (0.8 - 0.6) + 0.6
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

console.log(alienShipArr);

// const spaceBattle = {
//   round: function () {
//     console.log("The battle for Earth begins!");
//   },
// };

// console.log(spaceBattle);
