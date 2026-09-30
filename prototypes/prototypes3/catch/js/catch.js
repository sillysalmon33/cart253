/**
 * catch
 * kosta
 * 
 * You just found a super cool pokemon, test your luck to see if you can catch them.
 */

"use strict";


let win = random(1, 10)
let trainer1
let trainer2
let trainer3
let trainer4

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(500, 500)
    trainer1 = await loadImage('images/')
    trainer2 = await loadImage('images/')
    trainer3 = await loadImage('images/')
    trainer4 = await loadImage('images/')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 255)

    drawpokeball()
    drawlittleguy(translate(100,-50))


    if (mouseClicked()) {
        
        drawthrow()


    }

    if (win === 10) {
        drawwin()
    }

    else {



    }



}
//you press a button to trigger an animation to throw a pokeball and have a certain % change to catch a pokemon and if you do you win

function drawthrow() {
    
}
function drawwin() {

    textSize(theSize)
    text(str, x, y, x2, y2)
    
}


function drawpokeball() {
    push()
    fill(255,10,10)
    circle(250,250,100)
    pop()

    push()
    fill(255,255,255)
    arc(250, 250, 100, 100, 0, PI)
    pop()

    push()
    fill(255,255,255)
    stroke(5)
    line(200,250,300,250)
    pop()

    push()
    fill(255,255,255)
    stroke(50)
    circle(250,250, 10)
    pop()
}

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


function movement() {
    
}