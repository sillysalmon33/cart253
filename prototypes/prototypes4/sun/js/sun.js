/**
 * sun
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let BG = {
    r: 235,
    g: 173,
    b: 49,
}

let sunrise = 1
let day = 0
let sunset = 0
let night = 0






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
    background(BG.r, BG.g, BG.b)


    drawsunrise()




}


if (sunrise = 1) {
    drawsunrise()
}




function drawsunrise() {
    night = 0
    sunrise = 1
    push()
    BG.r = 235
    BG.g = 173
    BG.b = 49
    pop()

    push()
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    push()

    pop()


    push()
    noStroke()
    fill(250, 240, 55)
    circle(0, 550, 200, 20)
    pop()
    setTimeout(drawday(), 5000);

}

function drawday() {
    sunrise = 0
    day = 1
    push()
    BG.r = 30
    BG.g = 140
    BG.b = 230
    pop()

    push()
    noStroke()
    fill(20, 200, 90)
    rect(200, 400, 800, 800)
    push()

    pop()


    push()
    noStroke()
    fill(250, 240, 55)
    circle(0, 550, 200, 20)
    pop()

}