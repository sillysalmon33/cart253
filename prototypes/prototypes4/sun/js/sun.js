/**
 * sun
 * kosta
 * 
 * Witness the worlds fastest day over and over again like a really borring ground hog day (groundhag not included)
 */

"use strict";



let BG = {
    r: 0,
    g: 0,
    b: 0,
}

let sunrise = 1
let day = 0
let sunset = 0
let night = 0






/**
 * creates a canvas and makes an interval that changes the scene every 3 seconds
*/
function setup() {
    createCanvas(800, 800)
    setInterval(ChangeTime, 3000)
}


/**
 * draws background (which changes depending on the scene) and draws scene if the respective condition is met
*/
function draw() {
    background(BG.r, BG.g, BG.b)

//all the needed scenes will only show 1 if its condition is met
DrawSunrise()
DrawDay()
DrawNight()
DrawSunset()

}







//changes the condition of each scene to the next one in line forever
function ChangeTime() {
    
if (sunrise === 1){
    day = 1
    sunrise = 0
}

else if (day === 1) {
    sunset = 1
    day = 0
}

else if (sunset === 1) {
    night = 1
    sunset = 0
}

else if (night === 1) {
    sunrise = 1
    night = 0
}
}

//draws sunrise scene
function DrawSunrise() {
 //sunrise condition
if (sunrise === 1){
    //sunrise background
    push()
    BG.r = 235
    BG.g = 173
    BG.b = 49
    pop()
    //sunrise grass
    push()
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    pop()
    //sunsrise sun
    push()
    noStroke()
    fill(250, 240, 55)
    circle(150, 300, 200, 20)
    pop()
}
}
//draws day scene
function DrawDay() {
    //day condition
if (day === 1){
    //day background
    push()
    BG.r = 30
    BG.g = 140
    BG.b = 230
    pop()
    //day grass
    push()
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    pop()
    //day sun
    push()
    noStroke()
    fill(250, 240, 55)
    circle(400,150, 200, 20)
    pop()
}
}
//draws sunset scene
function DrawSunset() {
    //sunset condition
if (sunset === 1){
    //sunset background
    push()
    BG.r = 0
    BG.g = 0
    BG.b = 150
    pop()
    //sunset grass
    push()
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    pop()
    //sunset sun
    push()
    noStroke()
    fill(200, 200, 15)
    circle(650, 300, 200, 20)
    pop()
}
}
//draws night scene
function DrawNight() {
    //night condition
if (night === 1){
    //night background
    push()
    BG.r = 0
    BG.g = 0
    BG.b = 20
    pop()
    //night grass
    push()
    noStroke()
    fill(20, 150, 60)
    rect(0, 600, 800, 800)
    pop()
    //stars
    push()

    pop()

}
}
