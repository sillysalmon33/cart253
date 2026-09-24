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
 * creates a background and text
*/
function draw() {
    background(255,255,255)
    

    push()
    textSize(16)
    textAlign(CENTER, TOP)
    text('DONT SCARE HIM!!!!',250,30)
    pop()



 //draws scared version if the mouth is near the middle of the screen and if not draws the regular version
 if (mouseX >= 100 && mouseX <= 400 && mouseY >= 120 && mouseY <= 400) {
    drawscaredlittleguy()
} 
else {
    drawlittleguy()
}

}




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

/**
 * draws a scared little guy
 */
function drawscaredlittleguy() {
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
    fill(255,255,255)
    circle(250,290,80)
    pop()
    //iris'
    push()
    circle(215,230,70)   
    circle(280,230,70)
    pop()
 }