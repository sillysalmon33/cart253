/**
 * catch
 * kosta
 * 
 * You just found a super cool pokemon, test your luck to see if you can catch them.
 */

"use strict";

let win = 0
let chance = 0
let play = 0


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
    background(0, 255, 255)

    if(win === 0 ) {
    push()
    textSize(25)
    text("press space to try your luck at this little guy's lottery try to get over 5 ", 40, 25)
    pop()
    push()
    textSize(15)
    text("I can be trusted with your money", 450,350)
    pop()
    push()
    drawlittleguy(translate(100, 200,))
    pop()
    }

        if(play === 1){
        push()
        chance = random(1, 10)
        pop()
        }


            if (chance >= 6 ){
            win = 1
            play = 0
            }
                if (chance < 6){
                push()
                textSize(20)
                text(`Oh you only got ${chance} try again`, 250, 150)
                play = 0
                pop()
            }
}



function space() {
    if (mousePressed && win === 0){
    play = 1
    }
}






function drawpokeball() {
    push()
    fill(255, 10, 10)
    circle(250, 250, 100)
    pop()

    push()
    fill(255, 255, 255)
    arc(250, 250, 100, 100, 0, PI)
    pop()

    push()
    fill(255, 255, 255)
    stroke(5)
    line(200, 250, 300, 250)
    pop()

    push()
    fill(255, 255, 255)
    stroke(50)
    circle(250, 250, 10)
    pop()
}

function drawlittleguy() {
    //main head
    push()
    fill(255, 255, 255)
    circle(250, 250, 100)
    pop()
    //eyes
    push()
    fill(0, 0, 0)
    circle(220, 230, 80)
    circle(280, 230, 80)
    pop()
    //mouth
    push()
    line(230, 280, 270, 280)
    pop()
    //iris'
    push()
    fill(255, 255, 255)
    noStroke()
    circle(200, 220, 50)
    circle(270, 220, 50)
    pop()
}

