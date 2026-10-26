/**
 * Balls
 * kosta
 * 
 * You are exploring a museum and have discover the Jackson Pollock (the guy who painted with dots) machine and desided to try it out
 */

"use strict";

let Ball1 = undefined
let Ball2 = undefined
let Ball3 = undefined
let Ball4 = undefined
let Ball5 = undefined
let Ball6 = undefined
let Ball7 = undefined
let Ball8 = undefined
let Ball9 = undefined
let Ball10 = undefined
let Ball11 = undefined
let Ball12 = undefined
let R = undefined
let G = undefined
let B = undefined



/**
 * creates a canvas and chooses a randow location, size, and color for each ball
*/
function setup() {
    createCanvas(800,800)
                      //random X       //Random Y      //Random size  //Random color r,g,b
    Ball1 = createBall(random(1,800), random(1,800), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball2 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball3 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball4 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball5 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball6 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball7 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball8 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball9 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball10 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball11 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    Ball12 = createBall(random(1,1000), random(1,1000), random(1,500),random(1,255),random(1,255),random(1,255))
    //sets a random backroung color
    R = random(1,255)
    G = random(1,255)
    B = random(1,255)
}


/**
 * sets a random background color and renders text
*/
function draw() {
    background(R,G,B)

//renders 12 ball
drawBalls()

    push()
    fill(0,0,0)
    textSize(20)
    textAlign(CENTER, TOP)
    text("Refresh the Page to See what else you can make", 400, 10)
    pop()



}
//assigns each ball a randow x y size and color
function createBall(x, y, size, r,g,b) {
    const Ball = {
        x: x,
        y: y,
        size: size,
        r:r,
        g:g,
        b:b
    }
    return Ball
}
//renders 12 balls
function drawBalls() {
    drawBall(Ball1)
    drawBall(Ball2)
    drawBall(Ball3)
    drawBall(Ball4)
    drawBall(Ball5)
    drawBall(Ball6)
    drawBall(Ball7)
    drawBall(Ball8)
    drawBall(Ball9)
    drawBall(Ball10)
    drawBall(Ball11)
    drawBall(Ball12)
}

//draws a ball with random color size and location set my Ball const
function drawBall(Ball) {
    push()
    noStroke()
    fill(Ball.r, Ball.g, Ball.b)
    circle(Ball.x, Ball.y, Ball.size)
    pop()
}