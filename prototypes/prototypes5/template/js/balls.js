/**
 * balls
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
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
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 0)


drawBalls()


}

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


function drawBall(Ball) {
    push()
    noStroke()
    fill(Ball.r, Ball.g, Ball.b)
    circle(Ball.x, Ball.y, Ball.size)
    pop()
}