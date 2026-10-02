/**
 *please
 * Kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//set conditions for timer, losing, time limit and images
let timelimit = 60
let countdown
let thumb
let textb
let lose = 0
let win = 0


/**
 * creates a canvas and loads images
*/
async function setup() {
    createCanvas(800, 800)
    thumb = await loadImage('images/thumb.jpg')
    textb = await loadImage('images/textb.png')
}


/**
 *creates a background
*/
function draw() {
    background(0, 255, 255)

    //creates text little guy and speach bubble that leaves when the challenge in done after 1 minute or if the space bar is pressed
    if (countdown > 1 && lose === 0) {

        push()
        drawlittleguy(translate(500, 500))
        pop()

        push()
        textSize(52)
        text('DONT CLICK THE SPACE BAR!!!', 5, 60)
        text('DONT CLICK THE SPACE BAR!!!', 5, 110)
        text('DONT CLICK THE SPACE BAR!!!', 5, 160)
        text('DONT CLICK THE SPACE BAR!!!', 5, 210)
        text('DONT CLICK THE SPACE BAR!!!', 5, 260)
        text('DONT CLICK THE SPACE BAR!!!', 5, 310)
        text('DONT CLICK THE SPACE BAR!!!', 5, 360)
        pop()

        push()
        image(textb, 520, 510, 200, 200)
        pop()
    }

    //creates text that lasts for 10 seconds each (exept the last which lasts for 20 and disapears in the space bar is pressed)
    if (countdown > 50 && lose === 0) {
        textSize(13)
        text("Hey I know it says not to ", 550, 580,)
        text("press the space bar but...", 550, 590)
    }

    if (countdown > 40 && countdown < 51 && lose === 0) {
        textSize(13)
        text("Can you like...", 550, 580,)
        text("press it anyway... please", 550, 590)
    }

    if (countdown > 30 && countdown < 41 && lose === 0) {
        textSize(13)
        text("I know its a lot to ask", 550, 580,)
        text("I really need this... please", 550, 590)
    }

    if (countdown > 20 && countdown < 31 && lose === 0) {
        textSize(13)
        text("I just want to see", 550, 580,)
        text("my family again please...", 550, 590)
    }

    if (countdown > 0 && countdown < 21 && countdown > 1 && lose === 0) {
        textSize(13)
        text("OK I guess your not", 550, 580,)
        text("going to do it, I'm sorry", 550, 590)
    }

    //displays an image and text when the timer is done and sets win to 1
    if (countdown < 2) {
        countdown = 1
        win = 1
        square(500, 500)
        image(thumb, 0, 0, width, height)
        textAlign(CENTER, TOP)
        fill(122, 52, 235)
        textSize(20)
        text('CONGRADULATIONS!!! You completed a simple task :D', 450, 50)
    }

    // if space is pressed sets lose to 1
    if (key === " ") {
        lose = 1
    }

    // if space is pressed and the game didnt end, removes everything and displays text that you lost
    if (lose > 0 && win === 0) {
        push()
        textSize(33)
        text('Congradulations he escaped and ended the world :(', 25, 50)
        pop()
    }



    // creates a timer
    let currentTime = int(millis() / 1000)
    countdown = timelimit - currentTime

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

//A little guy asks you to press a button and you have to not listen to him to win