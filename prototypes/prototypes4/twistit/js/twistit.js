/**
 * Twistit
 * kosta
 * 
 * The famous game "Twistit" has now come to your keyboard bend your hands to press all the keys
 */

"use strict";

let KeyList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
let Key1 = 0
let Key2 = 0
let Key3 = 0
let Key4 = 0
let CorrectKey = 0
let WrongKey = 0
let Win = 0
let Lose = 0
let PressedKey = 0


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800)
    Key1 = random(KeyList)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,255,255)

    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("Press all the keys and dont let go", 400, 20)
    text(`Press: ${Key1}`, 400, 200)
    text(`Press: ${Key2}`, 400, 300)
    text(`lose: ${Lose}`, 400, 400)
    text(`new key: ${key}`, 400, 600)
    pop()







if (Key1 === keyIsDown() === true){

    Lose = 1
    Key2 = random(KeyList)
}




function NewestKey() {
    
}







// the 2 lose states, pressing the wrong key and letting go
if (WrongKey === 1) {
    lose = 1

}

/*
if (keyReleased(Key1 || Key2 || Key3 || Key4) === true) {
    Lose = 1

}
 */

}