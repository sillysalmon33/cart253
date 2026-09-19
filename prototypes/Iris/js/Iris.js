/**
 * Iris
 * Konstantinos
 * 
 * A P5JS file that renders an Iris flower
 */

"use strict";

/**
 * creates a canvas
*/
function setup() {
    createCanvas(500, 500)
}


/**
 * creates a background
*/
function draw() {
    background(0,255,255)


    //shows coordanites to make stuff easier
  fill(0)
  textSize(16)
  
  text(`X: ${mouseX}, Y: ${mouseY}`, 20, 30)


  push()
  stroke(52, 173, 84)
  strokeWeight(15)
    line(250, 500, 250, 230)
  pop()




}