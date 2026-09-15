/**
 *3D model
 * Konstantinos
 * 
 * A P5JS file that renders a custom 3D model I made
 */

"use strict";

/**
 * uses webgl rendering systems
*/
function setup() {
    createCanvas(600, 6000, WEBGL);

}


/**
 * creates a background and loads the model
*/
function draw() {
    background(255);
    fill(255, 0, 0)
    box();

    orbitControl();
}