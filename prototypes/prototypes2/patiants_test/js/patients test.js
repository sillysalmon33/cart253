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

let thumb
let low
//sets how long the timer is in seconds
let timelimit = 60
let countdown
let size = 20

async function setup() {
    thumb = await loadImage('images/thumb.jpg')
    low = await loadImage('images/low.png')
    createCanvas(500, 500)
}


/**
* draws a background
*/
function draw() {
    background(255, 255, 255)
    image(low, 0, 0, width, height)

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
