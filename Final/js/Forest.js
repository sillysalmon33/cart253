/**
 * The Forest
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * 
 * The player is lost in a forest and everytime they go off screen another set of trees spawn (even if they go backwards so they are trully lost) there are also npcs and 1 can tell them how to escape (go in specific direction up down down down left right) or if you go through too many rooms you get to a road and get run over. and there is also a secret 1% room where you get jumpscared by cristians face and a pitched down version of his scream
 */

"use strict";

let Rooms = 0
let MaxRooms = 30
let RunOver = false

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(900, 900)




//if the user goes through rooms than the max number of rooms they enter the lose room
    if (Rooms > MaxRooms) {
        RunOver = true
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0)
}

/**
 * draws a little guy
 */
function DrawLittleGuy() {
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