/**
 * patients test
 * kosta
 * 
 * move your mouse closer to a little guy to spook him (but dont do that, that's mean)

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
    background(255,255,255)
    drawlittleguy()


    push()
    fill(0)
textSize(16)
textAlign(CENTER, TOP)
text('DONT SCARE HIM!!!!',250,30)
    pop()

text(`X: ${mouseX}, Y: ${mouseY}`, 20, 30)
/**
 * draws a little guy
 */
function drawlittleguy() {
    //main head
    push() 
    fill(255,255,255)
    circle(250,250,100)
    pop()
    //eyes
    push()
    fill(0,0,0)
    circle(220,230,80)
    circle(280,230,80)
    pop()
    //mouth
    push()
    line(230,280,270,280)
    pop()
    //iris'
    push()
    fill(255,255,255)
    noStroke()
    circle(200,220,50)
    circle(270,220,50)
    pop()
}

    //draws scared version over non scared version
    if (mouseX > 100) {



}


//redraws the regular face
if (mouseX < 400) {
    drawlittleguy()


}
    //when you move your mouse closer to a little guy (maybe the mouse has a spooky artwork attacted to it) it changes his sprite to be really scared and if you move away he does back to normal
}