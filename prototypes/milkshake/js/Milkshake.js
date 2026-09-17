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




    //creates the drink
    push()
    fill(255, 192, 203)
    bezier(150, 200, 250, 750, 250, 500, 350, 200)
    pop()


    //creates the wipped cream
    push()

    pop()

    //creates the wipped cream lines
    push()

    pop()

    //creates the straw
    push()

    pop()

     //creates the cup
    push()
    fill(255, 255, 255, 100)
    noStroke()
    bezier(150, 200, 250, 750, 250, 500, 350, 200)
    pop()

     //creates the highlight
    push()
    fill(255,255,255, 180)
    noStroke()
    circle(190, 230,50,)
    pop()

    //creates the lines

    push()
    noFill()
    strokeWeight(0.7)
    bezier(180, 200, 250, 800, 250, 300, 250, 700)
    bezier(210, 200, 250, 800, 250, 300, 250, 700)
    bezier(240, 200, 250, 800, 250, 300, 250, 700)
    bezier(270, 200, 250, 800, 250, 300, 50, 700)
    bezier(300, 200, 250, 800, 200, 300, 250, 700)
    bezier(325, 200, 240, 800, 200, 300, 250, 700)
    pop()

   

}