/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
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

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a Trisolarian sun with a dynamic stroke weight
 */
function drawSun(x, y, size) {
    // Get the stroke weight for this sun
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

/**
 * Adds the two parameters together and returns the result
 */
function calculateStrokeWeight(x, y) {
    // Calculate the stroke weight of a sun based on
    // the distance of the mouse position
    const minWeight = 20;
    const maxWeight = 1;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, minWeight, maxWeight);
    // Actually return the result of our calculation to wherever this
    // function was called
    return result;
}