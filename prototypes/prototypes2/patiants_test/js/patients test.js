/**
 * patients test
 * kosta
 * 
 * wait a whole aganizing 1 minute in order to claim your price

 */

"use strict";

/**
 * creates a canvas and loads a face
*/

let face


async function setup() {
    face = await loadImage('images/screamingcristian.jpg');
    createCanvas(500, 500)
}


/**
* draws a background
*/
function draw() {
    background(255, 255, 255)

    textAlign()
    text('Wait a whole 1 minute', x, y, x2, y2)

    //sets a 1 min timer (60000)
    setTimeout(wait, 60000)


    //displays an image and text
    function wait() {
        function draw() {
            loadImage(face)
            textAlign(horizAlign, vertAlign)
            text('congradulations!!!', x, y, x2, y2)
        }
    }
    //have it to after a minute it shows cristians face and congradulations
}