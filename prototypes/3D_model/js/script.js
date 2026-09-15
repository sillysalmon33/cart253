/**
 *3D model
 * Konstantinos
 * 
 * A P5JS file that renders a custom 3D model I made
 */

"use strict";

/**
 * uses webgl rendering systems and creates a canvas
*/
function setup() {
    createCanvas(300, 300, WEBGL);

}


/**
 * creates a background and loads the model
*/
function draw() {
    background(255);
    fill(255, 0, 0)
    box();

    //allosws the user to move around
    orbitControl();
}