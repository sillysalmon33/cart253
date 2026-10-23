/**
 * Make your own Room
 * Kosta
 * 
 * You've just moved into your new (1 room) apartment and you want to decarate it (with 2 items and paint)
 */

"use strict";


let WLocation = {
    X: 0,
    Y: 0
}
let GLocation = {
    X: 700,
    Y: 150
}
let Wallcolor = "#ffffff"
let Fcolor = "#ffffff"
let Ccolor = "#ffffff"
let GColor = "#ffffff"
let colorPicker
let colorPicker2
let colorPicker3
let colorPicker4
let Finished = false
let LChoice1 = 0
let LChoice2 = 0


/**
 * creates canvas and 4 color pickers on top of one another
*/
function setup() {
    createCanvas(2000, 800)
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
 * creates a background and assigns the wall, floor, celling, and poster colors to the color pickers' colors
*/
function draw() {
    background(0, 0, 0)
    Wallcolor = colorPicker.value()
    Fcolor = colorPicker2.value()
    Ccolor = colorPicker3.value()
    GColor = colorPicker4.value()

    // renders the room and lets the user change the color of it
    Room(Wallcolor, Fcolor, Ccolor)
    // renders the window and lets the user change the location of it
    Window(WLocation)
    // renders the poster and lets the user change the location and color of it
    LittleGuyPoster(GLocation, GColor)

    //if finished is false shows the text for the color pickers and what to do
    if (Finished === false) {
        push()
        fill(0, 0, 0,)
        text("Wall Color", 350, 125)
        text("Floor Color", 350, 175)
        text("Celling Color", 350, 225)
        text("Poster Color", 350, 275)
        pop()

        push()
        fill("black")
        textSize(20)
        textAlign(CENTER, TOP)
        text("Pick The colors Of Your Room, When Your Done Press Space", width / 2, 20)
        text("move your mouse to deside where to place the window", width / 2, 50)
        pop()

        push()
        textSize(15)
        textAlign(CENTER, TOP)
        text("Press F to confirm Window location and G to unconfirm it, and Press Q to confirm Poster location and W to unconfirm it", width / 2, 80)
        pop()

    }

    // if the space bar is pressed sets finished to true
    if (key === (" ")) {
        Finished = true
    }

    //if finished is true moves the color pickers off screen and show text
    if (Finished === true) {
        colorPicker.position(20000, 250)
        colorPicker2.position(20000, 250)
        colorPicker3.position(20000, 250)
        colorPicker4.position(20000, 250)
        push()
        fill("black")
        textSize(20)
        textAlign(CENTER, TOP)
        text("Wow Your Room Looks Very Nice (Depressingly Empty)", width / 2, 20)
        pop()

    }
    //if Lchoice1 is set to 0 and finished is false and mosue X if less than 1300 render the window in its left location
    if (LChoice1 === 0 && Finished === false && mouseX < 1300) {
        WLocation.X = 0
    }
    //if Lchoice1 is set to 0 and finished is false and mosue X if more than 1300 render the window in its right location
    else if (LChoice1 === 0 && Finished === false && mouseX > 1300) {
        WLocation.X = 200
    }

    //if Lchoice2 is set to 0 and finished is false and mosue X if less than 1300 render the Poster in its left location
    if (LChoice2 === 0 && Finished === false && mouseX < 1300) {
        GLocation.X = 700
    }
    //if Lchoice2 is set to 0 and finished is false and mosue X if more than 1300 render the Poster in its right location
    else if (LChoice2 === 0 && Finished === false && mouseX > 1300) {
        GLocation.X = 1300
    }

    //if the F key is pressed set Lchoice1 to 1 making the window unmovable
    if (key === ("f")) {
        LChoice1 = 1
    }
    //if the G key is pressed set Lchoice1 to 0 making the window movable again
    if (key === ("g")) {
        LChoice1 = 0
    }
    //if the Q key is pressed set Lchoice2 to 1 making the Poster unmovable
    if (key === ("q")) {
        LChoice2 = 1
    }
    //if the W key is pressed set Lchoice2 to 0 making the Poster movable again
    else if (key === ("w")) {
        LChoice2 = 0
    }
}


//renders the room and lets the location and color be changed
function Room(Wallcolor, Fcolor, Ccolor) {
    // left wall
    push()
    fill(Wallcolor)
    quad(0, 0, 840, 150, 840, 550, 0, 800)
    pop()
    //right wall
    push()
    fill(Wallcolor)
    quad(840, 150, 2000, 150, 2000, 550, 840, 550)
    pop()
    // floor
    push()
    fill(Fcolor)
    quad(-500, 950, 840, 550, 2000, 550, 2000, 950)
    pop()
    //celling
    push()
    fill(Ccolor)
    quad(0, 0, 2000, 0, 2000, 150, 840, 150)
    pop()
}


//renders the window and lets the location be changed
function Window(WLocation) {
    //the window frame
    push()
    translate(WLocation.X, WLocation.Y)
    fill(20, 60, 180, 50)
    rect(1110, 280, 100, 170,)
    pop()
    //the window grills(? IDK if thats what they are called)
    push()
    translate(WLocation.X, WLocation.Y)
    line(1110, 365, 1210, 365)
    line(1160, 280, 1160, 450)
    pop()
}
//renders the little guy poser and lets the location and color be changed
function LittleGuyPoster(GLocation, GColor) {
    //poster
    push()
    translate(GLocation.X, GLocation.Y)
    fill(GColor)
    rect(160, 150, 175, 220)
    pop()
    //main head
    push()
    translate(GLocation.X, GLocation.Y)
    fill(255, 255, 255)
    circle(250, 250, 100)
    pop()
    //eyes
    push()
    translate(GLocation.X, GLocation.Y)
    fill(0, 0, 0)
    circle(220, 230, 80)
    circle(280, 230, 80)
    pop()
    //mouth
    push()
    translate(GLocation.X, GLocation.Y)
    line(230, 280, 270, 280)
    pop()
    //iris'
    push()
    translate(GLocation.X, GLocation.Y)
    fill(255, 255, 255)
    noStroke()
    circle(200, 220, 50)
    circle(270, 220, 50)
    pop()
}





