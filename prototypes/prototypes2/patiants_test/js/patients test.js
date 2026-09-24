/**
 * patients test
 * kosta
 * 
 * wait a whole aganizing 1 minute in order to claim your price

 */

"use strict";

/**
 * creates a canvas, creates the functions for the countdown and timelimit and loads a face
*/

let face
let timelimit = 5
let countdown

async function setup() {
    face = await loadImage('images/screamingcristian.jpg')
    createCanvas(500, 500)
}


/**
* draws a background
*/
function draw() {
    background(255, 255, 255)

    // creates a timer
     let currentTime = int(millis() / 1000)
    countdown =  timelimit - currentTime

     //the timer
   text('Time' + currentTime, 250,250)

    textAlign(CENTER, TOP)
    text('Wait a whole 1 minute', 250,10)

    //when the timer hits 60 drwaws over the previous stuff
    if (countdown < 0) {
        countdown = 0
        square(500,500)
        image(face, 0,0,width, height)
        textAlign(CENTER, TOP)
        fill(122, 52, 235)
        text('congradulations!!!', 250,10)
    
    }
}
