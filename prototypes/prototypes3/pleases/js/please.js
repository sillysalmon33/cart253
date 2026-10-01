/**
 *please
 * Kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let countdown


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
    background(255, 255, 255)
    drawlittleguy()

 // creates a timer
    let currentTime = int(millis() / 1000)
    countdown = timelimit - currentTime

    //the timer
    textSize(size)
    text('Time' + currentTime, 250, 250)

    textAlign(CENTER, TOP)
    textSize(size)
    text('Wait a whole minute', 250, 10)

    //when the timer hits 60 drwaws over the previous stuff
    if (countdown < 0) {
        countdown = 0
        square(500, 500)
        image(thumb, 0, 0, width, height)
        textAlign(CENTER, TOP)
        fill(122, 52, 235)
        textSize(size)
        text('CONGRADULATIONS!!! You completed a simple task :D', 250, 10)

    }

}

function drawscaredlittleguy() {
 //main head
    push() 
    fill(255,255,255)
    circle(250,250,100)
    pop()
    //eyes
    push()
    fill(0,0,0)
    circle(220,230,80)
    circle(280,230,80)
    pop()
    //mouth
    push()
    fill(255,255,255)
    circle(250,290,80)
    pop()
    //iris'
    push()
    circle(215,230,70)   
    circle(280,230,70)
    pop()
 }

//A little guy asks you to press a button and you have to not listen to him to win