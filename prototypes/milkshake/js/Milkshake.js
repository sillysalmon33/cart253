/**
 * Milkshake
 * Konstantinos
 * 
 * A P5JS file that renders tasty milkshave 😋
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,255,255)


//creates a milkshake

//probably should put this into a function

//should probably replace the triangles with arcs


    //creates the outline
    push()
    line(150,200,250,450)
    line(350,200,250,450)
    pop()

    //creates the drink
    push()
    fill(255, 192, 203)
    noStroke()
    triangle(150, 200, 250, 450, 350, 200)
    pop()

    //creates the wipped cream
    push()

    pop()

    //creates the straw
    push()

    pop()

     //creates the cup
    push()
    fill(255, 255, 255, 100)
    noStroke()
    triangle(150, 200, 250, 450, 350, 200)
    pop()
}