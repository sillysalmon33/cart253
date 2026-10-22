/**
 * Make your own Room
 * Kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

    
let WLocation = {
    X:0,
    Y:0
}
let Wallcolor = {
    R:10,
    G:0,
    B:0
}
let Fcolor = {
    R:0,
    G:0,
    B:10
}
let Ccolor = {
    R:0,
    G:20,
    B:255
}







//the user picks the color of different items (wallpaper, chairs, etc) and creates their own room

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(windowWidth, windowHeight)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(150, 0, 0)


Room(Wallcolor, Fcolor, Ccolor)
Window(WLocation)



push()
fill(0)
textSize(16)
text(`X: ${mouseX}, Y: ${mouseY}`, 20, 30)
pop()


}


function Room(Wallcolor, Fcolor, Ccolor) {

push()
fill(Wallcolor.R, Wallcolor.G, Wallcolor.B)
quad(0,0,840,150,840,550,0,800) // left wall
pop()

push()
fill(Wallcolor.R, Wallcolor.G, Wallcolor.B)
quad(840,150, 2000, 150, 2000, 550, 840, 550) //right wall
pop()

push()
fill(Fcolor.R, Fcolor.G, Fcolor.B)
quad(-500,950,840,550,2000,550,2000,950) // floor
pop()

push()
fill(Ccolor.R, Ccolor.G, Ccolor.B)
quad(0, 0, 2000, 0, 2000, 150, 840, 150) //celling
pop()
}

function Chair(CHLocation, CHcolor) {
    
}

function Window(WLocation) {

push()
translate(WLocation.X, WLocation.Y)
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
