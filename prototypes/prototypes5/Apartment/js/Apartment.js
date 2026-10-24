/**
 * Apartment
 * Konstantinos
 * 
 * You are deciding which apartment you're going to live at (is this a prequal to rooms)
 */

"use strict";

room1 = undefined

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)
    room1 = createroom()
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0)

    Apartment()
}

function createroom(x, y, r,g,b) {
    const room = {
        x: x,
        y: y,
        r:r,
        g:g,
        b:b
    }
    return room
}

function Apartment() {
    drawroom(room1)
    
}

function drawroom(room) {
    push()
    square()
    pop()
    
}