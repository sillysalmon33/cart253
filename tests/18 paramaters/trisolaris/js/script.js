/**
 * Trisolaris
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Poorly.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    // Draw the three suns of Trisolaris
    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a sun at specific position and size
 */
function drawSun(x, y, size) {
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}