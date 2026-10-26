/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
let speechIndex = 0;

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
    background(0, 0, 0)


    // Get the current line of our speech
    let currentLine = speech[speechIndex];

    // Display it
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER); // Centered horizontally and vertically
    text(currentLine, width / 2, height / 2); // Centered on the canvas
    pop();

}
function mousePressed() {
    speechIndex = speechIndex + 1;
    // Or: speechIndex += 1;
    // Or: speechIndex++;
    if (speechIndex >= speech.length) {
        // If so, reset it to 0 (go back to the beginning)
        speechIndex = 0;
    }

    // If you wanted to be very fancy you can use modulo instead:
    // speechIndex = (speechIndex + 1) % speech.length;

}