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
let PlayerA
let TreeA
let GrassA
let CristianA
let P = {
    X:400,
    Y:400,
    R:0
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(900, 900)
    PlayerA = await loadImage('assets/images/test.jpg')
  imageMode(CENTER);
  angleMode(DEGREES);



}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,0,255)

    DrawPlayer(P)
    MovePlayer(P)
    ChangeDirection()
    ChangeRoom()
    






    //if the user goes through rooms than the max number of rooms they enter the lose room
    if (Rooms > MaxRooms) {
        RunOver = true
    }
}

function DrawPlayer(P) {
    push()
    //translate is used so the rotate function doesnt break since it doesnt understand that the location has changed if P.X/P.Y is in image
    translate(P.X,P.Y)
    //rotates the image from the center
    imageMode(CENTER);
    rotate(P.R)
    image(PlayerA,0,0, 150,100)
    pop()

}

//allows the user to move via wasd
function MovePlayer(P) {
if (keyIsDown("a") === true || keyIsDown("A") === true) {
        P.X -= 1.5
    }
    if (keyIsDown("d") === true || keyIsDown("D") === true) {
        P.X += 1.5
    }
    if (keyIsDown("w") === true || keyIsDown("W") === true) {
        P.Y -= 1.5
    }
    if (keyIsDown("s") === true || keyIsDown("S") === true) {
        P.Y += 1.5
    }
}

//if the user is moving rotates the sprite to face the direction they are facing
function ChangeDirection() {
    if (keyIsDown("w") === true && keyIsDown("a") === true)  {
        push()
        P.R = 315
        pop()
}
        else if (keyIsDown("s") === true && keyIsDown("a") === true){
            push()
            P.R =225
            pop()
            }

            else if (keyIsDown("s") === true && keyIsDown("d") === true){
                push()
                P.R = 135
                pop()
            }
                else if (keyIsDown("w") === true && keyIsDown("d") === true){
                    push()
                    P.R = 45
                    pop()
            }
                    else if (keyIsDown("w")) {
                        P.R=0
                    }
                        else if (keyIsDown("d")) {
                            P.R=90
                        }
                            else if (keyIsDown("s")) {
                                P.R=180
                            }
                                else if (keyIsDown("a")) {
                                    P.R=270
                                 }
                    //the default rotation
                    else {P.R =0}

}
//everytime the player goes off screen teleport them back on the opposite side and add 1 to the Rooms counter
function ChangeRoom() {
if (P.X < width-75){
    P.X += 900
    Rooms++
}
if (P.X > width-75){
    P.X -= 900
    Rooms++
}
if (P.Y < width-75){
    P.Y += 900
    Rooms++
}
if (P.Y > width-75){
    P.Y -= 900
    Rooms++
}
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