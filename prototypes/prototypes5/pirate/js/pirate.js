/**
 * Pirate
 * Kosta
 * 
 * A massive pirate battle has errupted on the 7 seas but you kinda just wantto go home
 */

"use strict";


let Title = true
let lose = false


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)
}


//the player must avoid cannon balls being shot at them by other ships that have random colors and locations when they reach the edge of the screen they are set back to the begining and new locations and colors are chosen for the ships (maybe you can pick your own color also)

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0)


    if (Title === true) {

        push()
        textSize(20)
        textAlign(CENTER, TOP)
        text("Pirate", 400, 20)
        text("Chose your color", 400, 50)
        pop()
    }
}


drawYourShip(Pcolor, PX, PY); {
    push()

    pop()

}

drawEnemyShip(Ecolor, EX, EY); {
    push()

    pop()

}

drawCannonBall(); {
    push()

    pop()
}