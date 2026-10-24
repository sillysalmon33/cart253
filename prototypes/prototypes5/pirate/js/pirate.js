/**
 * Pirate
 * Kosta
 * 
 * A massive pirate battle has errupted on the 7 seas but you kinda just wantto go home
 */

"use strict";



let Eship1 = undefined
let Eship2 = undefined
let Eship3 = undefined
let Eship4 = undefined
let Eship5 = undefined
let Eship6 = undefined
let P = {
    X:10,
    Y:400
}
let lose = false
let score = 0
let ShipA



/**
 * creates a canvas and lets ship image render
*/
async function setup() {
    createCanvas(800, 800)
    ShipA = await loadImage('assets/images/ship.png')

   Eship1 = CreateEship(random(175,700), random(1,2))
}


//the player must avoid cannon balls being shot at them by other ships that have random colors and locations when they reach the edge of the screen they are set back to the begining and new locations and colors are chosen for the ships (maybe you can pick your own color also)

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30, 0, 200)

    //stops the ship from going off screen
    P.X = constrain(P.X, 0, 800)
    P.Y = constrain(P.Y, 0, 700)

    DrawYourShip(P)
    MoveYourShip(P)
    DrawEnemyShips()
    CannonBall()
    Win()

fill(0)
textSize(16)

text(`X: ${E.x}, Y: ${score}`, 20, 30)

}
//draws the users ship with the X and Y able to be changed
function DrawYourShip(P) {
    push()
    image(ShipA, P.X, P.Y, 150,100)
    pop()

}


//allows the user to move via wasd or arrow keys
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

function CreateEship(x,y) {
    const E = {
        x: x,
        y: y
    }
    return E
}

//draws all the enemy ships
function DrawEnemyShips() {
EnemyShip(Eship1)


}
//renders the enemy ship and lets the X and Y be changed via E
function EnemyShip(E) {
    push()
    image(ShipA, E.x, E.y, 150,100)
    pop()

}

function CreateCannonBall(x,y,velocity) {
    const Ball = {
        x: x,
        y: y,
        size: 5,
        velocity: random(3,10)
    }
    return Ball
}

function DrawCannonBall() {
    CannonBall()
}

function MoveCannonBalls(Ball) {
    Ball.x += Ball.velocity
}

function CannonBall(E) {
    //cannon ball
    push()
    translate(100,100)
    noStroke()
    fill(0,0,0)
    circle(0,0,30)
    pop()
    //highlight
    push()
    translate(100,100)
    noStroke()
    fill(255,255,255, 20)
    circle(5,-5,15)
    pop()
}





//when the ship almost reaches the end of the screen send it back to the begining and add 1 to score and changes the location of all the ships
function Win() {
if (P.X > width-75){
    P.X = 10
    P.Y = 400
    Eship1 = CreateEship(random(175,700), random(1,2))
    score++
}
}