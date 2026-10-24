/**
 * Pirate
 * Kosta
 * 
 * A massive pirate battle has errupted on the 7 seas but you kinda just wantto go home
 */

"use strict";

let P = {
    X:10,
    Y:400

}
let E = {
    X:undefined,
    Y1:100,
    Y2:600,
    N: undefined
}
let lose = false
let score = 0
let ShipA



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(800, 800)
    ShipA = await loadImage('assets/images/ship.png')
}


//the player must avoid cannon balls being shot at them by other ships that have random colors and locations when they reach the edge of the screen they are set back to the begining and new locations and colors are chosen for the ships (maybe you can pick your own color also)

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30, 0, 200)
    DrawYourShip(P)
    MoveYourShip(P)
    drawEnemyShip(E,Number)


}

function DrawYourShip(P) {
    push()
    image(ShipA, P.X, P.Y, 150,100)
    pop()

}

function MoveYourShip(P) {
if (keyIsDown(LEFT_ARROW) === true || keyIsDown("a") === true || keyIsDown("A") === true) {
        P.X -= 3
    }
    if (keyIsDown(RIGHT_ARROW) === true || keyIsDown("d") === true || keyIsDown("D") === true) {
        P.X += 3
    }
    if (keyIsDown(UP_ARROW) === true || keyIsDown("w") === true || keyIsDown("W") === true) {
        P.Y -= 3
    }
    if (keyIsDown(DOWN_ARROW) === true || keyIsDown("s") === true || keyIsDown("S") === true) {
        P.Y += 3
    }
}


function drawEnemyShip(E, Number) {
    push()
    image(ShipA, E.X, E.Y, 150,100)
    pop()
    E.X = random(175,775)
}

function drawCannonBall() {
    push()

    pop()
}
