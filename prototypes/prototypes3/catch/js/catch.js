/**
 * catch
 * kosta
 * 
 * You just found a super cool pokemon, test your luck to see if you can catch them.
 */

"use strict";


let win = random(1, 10)
let start = 1
let throw1 = 0
let throw2 = 0
let shake1 = 0
let shake2 = 0
let shake3 = 0
let t1 = 1
let t2 = 0
let t3 = 0
let t4 = 0
let ball = 0
let shakeA
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
    shakeA = await loadSound('images/')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 255)

    //loads the first trainer spite and text if the game hasnt started yet
    if (start === 1) {
        t1 = 1
        image(img, x, y, width, height)
        textSize()
        text(str, x, y, x2, y2)
    }

    //if the pokemon isnt in the ball render it
    if (ball === 0) {
        drawlittleguy(translate(100, -50))
    }




    //switches trainer sprite when space bar is pressed
    if (key === ' ' && start === 1) {
        image(trainer1, x, y, width, height)
        start = 0
        t1 = 0
        t2 = 1
    }

    if (t2 === 1) {
        image(trainer2, x, y, width, height)
        t2 = 0
        t3 = 1
    }

    if (t3 === 1) {
        image(trainer3, x, y, width, height)
        t3 = 0
        t4 = 1
    }

    if (t4 === 1) {
        image(trainer4, x, y, width, height)
        t4 = 0
        t1 = 1
        throw1 = 1
    }











    if (win === 10) {
        drawwin()
    }

    else {



    }



}
//you press a button to trigger an animation to throw a pokeball and have a certain % change to catch a pokemon and if you do you win


function drawwin() {

    textSize(theSize)
    text(str, x, y, x2, y2)

}






function drawpokeball() {
    push()
    fill(255, 10, 10)
    circle(250, 250, 100)
    pop()

    push()
    fill(255, 255, 255)
    arc(250, 250, 100, 100, 0, PI)
    pop()

    push()
    fill(255, 255, 255)
    stroke(5)
    line(200, 250, 300, 250)
    pop()

    push()
    fill(255, 255, 255)
    stroke(50)
    circle(250, 250, 10)
    pop()
}

function drawlittleguy() {
    //main head
    push()
    fill(255, 255, 255)
    circle(250, 250, 100)
    pop()
    //eyes
    push()
    fill(0, 0, 0)
    circle(220, 230, 80)
    circle(280, 230, 80)
    pop()
    //mouth
    push()
    line(230, 280, 270, 280)
    pop()
    //iris'
    push()
    fill(255, 255, 255)
    noStroke()
    circle(200, 220, 50)
    circle(270, 220, 50)
    pop()
}


function movement() {

}