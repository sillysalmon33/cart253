/**
 * Milkshake
 * Konstantinos
 * 
 * A P5JS file that renders tasty milkshave 😋
 */

"use strict";

/**
 * makes canvas
*/
function setup() {
    createCanvas(500, 500)
}


/**
 *makes background
*/
function draw() {
    background(0,255,255)

    //creates the straw
    push()
    stroke(255,235,235)
    strokeWeight(10)
    line(275,175, 350,75)
    pop()

    //creates the red lines on the straw
    push()
    stroke(224, 29, 29)
    strokeWeight(3)
    line(295,142, 300,148)
    line(305,128, 310,135)
    line(315,115, 320,122)
    line(325,102, 330,110)
     line(335,87, 340,95)
    pop()

    //creates the drink
    push()
    fill(255, 192, 203)
    bezier(150, 200, 250, 750, 250, 500, 350, 200)
    pop()


    //creates the wipped cream
    push()
    fill(255, 245, 245)
    noStroke()
    bezier(150, 200, 150, 200, 220, 90, 350, 200)
    bezier(150, 200, 150, 150, 220, 170, 350, 200)
    bezier(150, 200, 150, 100, 220, 200, 350, 200)
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