/**
 *3D model
 * Konstantinos
 * 
 * A P5JS file that renders a custom 3D model I made along with some other objects
 */

"use strict";

let cutlass

/**
 * uses webgl rendering systems and creates a canvas
*/

async function setup() {
    cutlass = await loadModel('/Images/cutlass.obj', true);
    createCanvas(500, 500, WEBGL);
}
/**
 * creates a background and loads the models
*/
function draw() {
    background("#800080");

    //creates a red table
    push()
    fill(255, 0, 0)
    translate(30,-20,-30)
    rotateY(180)
    box(100,80,50);
    pop()

    //creates a blue cup
    push()
    fill(0, 0, 255)
    noStroke()
    translate(0, -75, 0)
    cylinder(10, 30,)
    pop()

    //creates a floor
    push()
    fill(0,255,0)
    translate(0,22)
    box(250,2,250)
    pop()

    //creates a cutless
    push()
    //allows the user to move and rotate the model
   translate(70,-41, 0)
   rotateX(-65.35)
   rotateY(190)
   rotateZ(60)
   noStroke()
   model(cutlass)
   pop()

    //allosws the user to move around
    orbitControl();
}