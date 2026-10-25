/**
 * Apartment
 * Konstantinos
 * 
 * You are deciding which apartment you're going to live at (is this a prequal to room?)
 */

"use strict";

let room1 = undefined
let room2 = undefined
let room3 = undefined
let room4 = undefined
let room5 = undefined
let room6 = undefined
let room7 = undefined
let room8 = undefined
let room9 = undefined
let room10 = undefined

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)
    //each room is placed next to each other so they do not overlap and the color is picked randomly
                    //X,   Y,   R,            G,           B  
    room1 = createroom(100,100,random(1,255),random(1,255),random(1,255))
    room2 = createroom(250,100,random(1,255),random(1,255),random(1,255))
    room3 = createroom(400,100,random(1,255),random(1,255),random(1,255))
    room4 = createroom(550,100,random(1,255),random(1,255),random(1,255))
    room5 = createroom(700,100,random(1,255),random(1,255),random(1,255))
    room6 = createroom(100,200,random(1,255),random(1,255),random(1,255))
    room7 = createroom(250,200,random(1,255),random(1,255),random(1,255))
    room8 = createroom(400,200,random(1,255),random(1,255),random(1,255))
    room9 = createroom(550,200,random(1,255),random(1,255),random(1,255))
    room10 = createroom(700,200,random(1,255),random(1,255),random(1,255))

}


/**
 * creates a black background and 2 floor and then dublicates those floors 200 and 400 units down
*/
function draw() {
    background(0, 0, 0)

    Apartment()
    F2()
    reset()

}

//lets the rooms location and color and windows location be changed
function createroom(x, y, r,g,b,) {
    const room = {
        x: x, //whole room x
        y: y, //whole room y
        r:r, //whole room r value
        g:g, //whole room g value
        b:b, //whole room b value
        w:random(10,100) //window location
    }
    return room
}
//renders 10 rooms with 5 below the other 5
function Apartment() {
    drawroom(room1)
    drawroom(room2)
    drawroom(room3)
    drawroom(room4)
    drawroom(room5)
    drawroom(room6)
    drawroom(room7)
    drawroom(room8)
    drawroom(room9)
    drawroom(room10)
}
//draws the individual rooms
function drawroom(room) {
    //the square room with the location, and color changable via room const
    push()
    fill(room.r,room.g,room.b)
    translate(room.x,room.y)
    rect(0, 100, 150, 100)
    pop()
    //the window with the location and color changable via room const
    push()
    translate(room.x,room.y)
    rect(room.w, 120, 40, 70)
    pop()
    
}

//redraws the 10 rooms from the apartment function again 200 and 400 units below the original 2 floor to save space
function F2() {
    push()
    translate(0, 200)
    Apartment()
    pop()

    push()
    translate(0, 400)
    Apartment()
    pop()
}