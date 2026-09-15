/**
 *3D model
 * Konstantinos
 * 
 * A P5JS file that renders a custom 3D model I made along with some other objects
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
    //creates a red table
    push()
    fill(255, 0, 0)
    rotateY(180)
    box(100, 50);
    pop()

    //creates a blue cup
    push()
    translate(0, -40, 0)
    noStroke()
    fill(0, 0, 255)
    cylinder(10, 30,)
    pop()

    //allosws the user to move around
    orbitControl();
}