/**
 * Lottery
 * kosta
 * 
 * Gamble your (imaginary) money away to see what you'll win
 */

"use strict";

let win = 0
let chance = 0
let play = 0
let textb


/**
 * creates a canvas and loads an image
*/
async function setup() {
    createCanvas(800, 800)
    textb = await loadImage('images/textb.png')
}


/**
 * draws a background
*/
function draw() {
    background(0, 255, 255)

    //displays text, and image and a little guy
    if (win === 0) {
        push()
        textSize(25)
        text("press space to try your luck at this little guy's lottery try to get over 8 ", 40, 25)
        pop()

        push()
        image(textb, 120, 210, 200, 200)
        pop()

        push()
        textSize(15)
        text("I can be trusted with", 150, 280)
        text("your money", 150, 300)
        pop()

        push()
        drawlittleguy(translate(100, 200,))
        pop()
    }


    //if mouse is clicked pickes a whole numebr between 1 and 10
    if (play === 1) {
        push()
        chance = floor(random(1, 10))
        pop()
    }

    //if its higher or equal to 8 you win
    if (chance >= 8) {
        win = 1
        play = 0
    }
    // if its lower than 8 you lose and display your number with text
    if (chance < 8 && win === 0 && chance > 0) {
        push()
        textSize(30)
        text(`Oh you only got ${chance} try again`, 200, 100)
        play = 0
        pop()
    }
    //displays text when you win and removes everything else
    if (win === 1) {
        textSize(30)
        text("Congradulations you didnt get anything :D", 110, 400)



    }

}
//if mouse clicked makes play 1 so its interactable
function keyPressed() {
    play = 1
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

