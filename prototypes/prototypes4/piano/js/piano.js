/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let A1
let A2
let A3
let A4
let A5
let A6
let A7
let A8
let A9
let A10
let A11
let A12
let A13
let A14
let A15
let A16
let A17
let A18
let A19
let A20

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(800, 800)
    A1 = await loadSound('images/c.wav')
    A2 = await loadSound('images/c#.wav')
    A3 = await loadSound('images/d.wav')
    A4 = await loadSound('images/d#.wav')
    A5 = await loadSound('images/e.wav')
    A6 = await loadSound('images/f.wav')
    A7 = await loadSound('images/f#.wav')
    A8 = await loadSound('images/g.wav')
    A9 = await loadSound('images/g#.wav')
    A10 = await loadSound('images/a#.wav')
    A11 = await loadSound('images/b.wav')
    A12 = await loadSound('images/c.wav')
    A13 = await loadSound('images/c.wav')
    A14 = await loadSound('images/c.wav')
    A15 = await loadSound('images/c.wav')
    A16 = await loadSound('images/c.wav')
    A17 = await loadSound('images/c.wav')
    A18 = await loadSound('images/c.wav')
    A19 = await loadSound('images/c.wav')
    A20 = await loadSound('images/c.wav')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0)

    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("use your keyboard as a keyboard (musical) to play music (musically)", 400, 20)
    pop()






if (keyIsDown("a") === true) {
    A1.play()
}

if (keyIsDown(w) === true) {
    A2.play()
}

if (keyIsDown(d) === true) {
    A3.play()
}

if (keyIsDown(r) === true) {
    A4.play()
}

if (keyIsDown(f) === true) {
    A5.play()
}

if (keyIsDown(g) === true) {
    A6.play()
}

if (keyIsDown(t) === true) {
    A7.play()
}

if (keyIsDown(h) === true) {
    A8.play()
}

if (keyIsDown(u) === true) {
    A9.play()
}

if (keyIsDown(a) === true) {
    A10.play()
}

if (keyIsDown(a) === true) {
    A11.play()
}

if (keyIsDown(a) === true) {
    A12.play()
}
}