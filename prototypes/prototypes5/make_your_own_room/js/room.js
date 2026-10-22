/**
 * Make your own Room
 * Kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//the user picks the color of different items (wallpaper, chairs, etc) and creates their own room

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(150, 0, 0)


Room()
Window()

    fill(0)
textSize(16)

text(`X: ${mouseX}, Y: ${mouseY}`, 20, 30)
}



function Room(Wcolor, Fcolor, Ccolor) {

push()
fill(255,255,255)
quad(0,0,840,150,840,550,0,800) // left wall
pop()

push()
fill(255,255,255)
quad(840,150, 2000, 150, 2000, 550, 840, 550) //right wall
pop()

push()
fill(255,255,255)
quad(-500,950,840,550,2000,550,2000,950) // floor
pop()

push()
fill(255,255,255)
quad(0, 0, 2000, 0, 2000, 150, 840, 150) //celling
pop()
}

function Chair(CHLocation, CHcolor) {
    
}

function Window(WLocation) {

push()
fill(20,60,180,50)
rect(1110, 280, 100, 170,)
pop()

push()
line(1110, 365, 1210, 365)
line(1160, 280, 1160, 450)
pop()
    
}

function LittleGuyPoster(GLocation) {
    
}