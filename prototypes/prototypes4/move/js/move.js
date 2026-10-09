/**
 * move
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//variables for mouse
let move = {
    x: 400,
    y: 400,
}


//variables for color
let R = 0
let G = 0
let B = 0






/**
 * creates a canvas
*/
function setup() {
    createCanvas(800, 800)
}


/**
 * creates a background using the colour variables and constrains the variables to between 0 and 255
*/
function draw() {
    background(R, G, B)

    R = constrain(R, 0, 255)
    G = constrain(G, 0, 255)
    B = constrain(B, 0, 255)



    //if the arrow keys or wasd keys are pressed move the player and change the color of the background by set numbers

    if (keyIsDown(LEFT_ARROW) === true || keyIsDown("a") === true || keyIsDown("A") === true) {
        move.x -= 1
        R -= 4
        G += 2
        B += 4
    }
    if (keyIsDown(RIGHT_ARROW) === true || keyIsDown("d") === true || keyIsDown("D") === true) {
        move.x += 1
        R += 4
        G += 4
        B += 3
    }
    if (keyIsDown(UP_ARROW) === true || keyIsDown("w") === true || keyIsDown("W") === true) {
        move.y -= 1
        R -= 4
        G -= 2
        B -= 6
    }
    if (keyIsDown(DOWN_ARROW) === true || keyIsDown("s") === true || keyIsDown("S") === true) {
        move.y += 1
        R += 2
        G -= 6
        B -= 4
    }


    fill(255, 255, 255)
    text(`${R}`, 400, 30)
    text(`${G}`, 400, 60)
    text(`${B}`, 400, 90)
    DrawYou()
}


//circle to repressent the player
function DrawYou() {
    push()
    fill(255, 0, 0)
    circle(move.x, move.y, 50)
    pop()
}

