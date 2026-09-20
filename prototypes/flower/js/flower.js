/**
 * Iris
 * Konstantinos
 * 
 * A P5JS file that renders a flower
 */

"use strict";

/**
 * creates a canvas
*/
function setup() {
    createCanvas(500, 500)
}


/**
 * creates a background and clouds
*/
function draw() {
    background(0,255,255)
    drawcloud()
    push()
    drawcloud(translate(-300,20))
    drawcloud(translate(10,200))
    drawcloud(translate(100,50))
    drawcloud(translate(20,-300))
  pop()

  //creates background petal
   push()
  fill(209, 93, 215)
  noStroke()
  bezier(230, 200, 230,330, 125, 550, 300,330)
  pop()


  //creates stem
  push()
  stroke(52, 173, 84)
  strokeWeight(15)
    line(235, 500, 235, 230)
  pop()


  //creates left petal
  push()
  noStroke()
  fill(229, 113, 235)
  translate(30, -30, )
  bezier(250, 230, 350,270, 275, 550, 200,320)
  pop()
  
  //creates right petal
  push()
  fill(229, 113, 235)
  noStroke()
  bezier(280, 200, 230,330, 125, 550, 150,175)
  pop()

  /**
   * fixes left petal to make it look curved
  */

  //creates a circle that's the same colour as the background to hide the sharp edges
  push()
  noStroke() 
  fill(0,255,255)
  circle(150,190,150)
  pop()

  //creates a cirlce that makes the flower look curved
  push()
  noStroke()
  fill(229, 113, 235) 
  circle(210,253,130)
  pop()

  /**
   * creates cloud
  */
  function drawcloud(){
  push()
  fill(255,255,255)
  noStroke()
  circle(410,80,40)
  circle(430,80,40)
  circle(370,80,40)
  circle(380,70,40)
  circle(390,90,60)
  circle(400,90,50)
  circle(410,90,50)
  pop()
}

//add other circle to make clouds different
  push()
  noStroke()
  fill(0,255,255) 
  circle(380,20,130)
  circle(80,375,130)
  pop()

}