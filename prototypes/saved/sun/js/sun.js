/**
 * sun
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// google kept saying it didnt know what push() or nofill() meant in functions, I dont know how to fix it plus the settimeout wouldnt work


let BG = {
    r: 235,
    g: 173,
    b: 49,
}

let sunrise = 1
let day = 0
let sunset = 0
let night = 0






/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(BG.r, BG.g, BG.b)





    setTimeout(changes, 5000);



}


function first() {

    push();
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    pop();
}

function seconds() {

    push();
    noStroke()
    fill(160, 0, 90)
    rect(0, 400, 800, 800)
    pop();
}


if (sunrise === 1) {
    first()
}

if (day === 1) {
    seconds()
}

function changes() {
    sunrise = 0
    day = 1

}



/*


if (sunrise === 1) {
    drawsunrise()
}

if (day === 1) {
    drawsday()
}





function drawsunrise() {
    night = 0
    sunrise = 1

    push()
    BG.r = 235
    BG.g = 173
    BG.b = 49
    pop()

    push()
    noStroke()
    fill(20, 200, 90)
    rect(0, 600, 800, 800)
    pop()


    push()
    noStroke()
    fill(250, 240, 55)
    circle(0, 550, 200, 20)
    pop()


}

function drawday() {
    sunrise = 0
    day = 1
    push()
    BG.r = 30
    BG.g = 140
    BG.b = 230
    pop()

    push()
    noStroke()
    fill(20, 200, 90)
    rect(200, 400, 800, 800)
    pop()

    push()
    noStroke()
    fill(250, 240, 55)
    circle(0, 550, 200, 20)
    pop()

}

function change1() {
    night = 0
    sunrise = 1
}

function change2() {
    sunrise = 0
    day = 1
}
    */