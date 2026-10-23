/**
 * Make your own Room
 * Kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

    
let WLocation ="#ffffff"
let Wallcolor = "#ffffff"
let Fcolor = "#ffffff"
let Ccolor = "#ffffff"
let Choice = 0
let colorPicker
let colorPicker2
let colorPicker3
let colorPicker4
let input = 0
let Finished = false








//the user picks the color of different items (wallpaper, chairs, etc) and creates their own room

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight)
    colorPicker = createColorPicker('white')
    colorPicker.position(200, 100)

    colorPicker2 = createColorPicker('white')
    colorPicker2.position(200, 150)

    colorPicker3 = createColorPicker('white')
    colorPicker3.position(200, 200)

    colorPicker4 = createColorPicker('white')
    colorPicker4.position(200, 250)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(150, 0, 0)
    Wallcolor = colorPicker.value()   
    Fcolor = colorPicker2.value()
    Ccolor = colorPicker3.value()

Room(Wallcolor, Fcolor, Ccolor)
Window(WLocation)


if (Finished === false){
    push()
    fill(0,0,0,)
    text("Wall Color", 125, 117)
    text("Floor Color", 125, 167)
    text("Celling Color", 120, 217)
    text("Chair Color", 125, 267)
    pop()

    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("Pick The colors Of Your Room, When Your Done Press Space", width/2, 20)
    pop()
}

push()
fill(0)
textSize(16)
text(`X: ${Wallcolor}, Y: ${Choice}`, 20, 30)
pop()



}


function Room(Wallcolor, Fcolor, Ccolor) {

push()
fill(Wallcolor)
quad(0,0,840,150,840,550,0,800) // left wall
pop()

push()
fill(Wallcolor)
quad(840,150, 2000, 150, 2000, 550, 840, 550) //right wall
pop()

push()
fill(Fcolor)
quad(-500,950,840,550,2000,550,2000,950) // floor
pop()

push()
fill(Ccolor)
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


