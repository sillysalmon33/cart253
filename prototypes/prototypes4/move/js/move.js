/**
 * move
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let move = {
    x: 400,
    y: 400,
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 0, 255)


    //fix wasd not working

    if (keyIsDown(LEFT_ARROW) === true || keyIsDown(83) === true) {
        move.x -= 1;
    }
    if (keyIsDown(RIGHT_ARROW) === true || keyIsDown(68) === true) {
        move.x += 1;
    }
    if (keyIsDown(UP_ARROW) === true || keyIsDown(87) === true) {
        move.y -= 1;
    }
    if (keyIsDown(DOWN_ARROW) === true || keyIsDown(83) === true) {
        move.y += 1;
    }


    DrawYou()
}


function DrawYou() {
    push()
    fill(255, 0, 0)
    circle(move.x, move.y, 50)
    pop()
}
