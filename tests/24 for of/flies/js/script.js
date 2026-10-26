/**
 * Flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array.
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10
    },
    {
        x: 160,
        y: 170,
        size: 14
    },
    {
        x: 180,
        y: 50,
        size: 5
    }
];

/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);
}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceed");

    for (let fly of flies) {
        push();
        fill(0);
        ellipse(fly.x, fly.y, fly.size);
        pop();
    }
}