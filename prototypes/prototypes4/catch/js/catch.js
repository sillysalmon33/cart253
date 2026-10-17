/**
 * catch
 * kosta
 * 
 * You just found a super cool pokemon, test your luck to see if you can catch them.
 */

"use strict";


let win = 0 //the win condition
let WinA = 0 //condition so win audio only plays once
let start = 1 //the start condition
let fail = 0 //let the game know if you failed
let Input = 0 // variable for if the user presses a key
let wait = 0 // The variable to know if a random number should be chosen
let chance = false // The condition that checks if the user won or lost (is set to false to avoid the user permanatly losing since !changce === 0 doesnt work for some reason)
let Escape = 0 // condition that check if a random number has been picked (is here because !changce === 0 doesnt work for some reason)

let ball = 0 // The variable to know if the pokemon is inside the
let BX1 = -20 // starting X loctation for ball
let BY1 = 350 // Starting Y location for ball
let BX2 = 320 // ending X location for ball
let BY2 = 10 //ending Y location for ball
let throw1 = 0 // The variable to know if the throw animation is playing (just throw doesnt work for some reason)

let shake1 = 0 // The variable for the right pokeball shake location
let shake2 = 0 //The variable for the left pokeball shake location
let shake3 = 0 // The variable for the middle pokeball shake location
let S0 = 0 // The variable to make sure the shake animation doesnt loop
let S1 = 0 // A Variable to make the shake animation progress and not loop
let S2 = 0 // A Variable to make the shake animation progress and not loop
let S3 = 0 // A Variable to make the shake animation progress and not loop
let S4 = 0 // The variable to display the final pokeball frame

let t1 = 1 // The variable to know if the first trainer sprite is rendered
let t2 = 0 // The variable to know if the second trainer sprite is rendered
let t3 = 0 // The variable to know if the third trainer sprite is rendered
let t4 = 0 // The variable to know if the forth trainer sprite is rendered
let trainer1 //first trainer sprit
let trainer2 // second trainer sprit
let trainer3 // third trainer sprit
let trainer4 // forth trainer sprit
let shakeA // shake audio
let catchA // catch audio

/**
 * loads a canvas, 4 trainer sprites and shake audio
*/
async function setup() {
    createCanvas(800, 800)
    trainer1 = await loadImage('images/trainer1.png')
    trainer2 = await loadImage('images/trainer2.png')
    trainer3 = await loadImage('images/trainer3.png')
    trainer4 = await loadImage('images/trainer4.png')
    catchA = await loadSound('images/catch.mp3')
    shakeA = await loadSound('images/shake.mp3')

    //waits 0.3 seconds to switch trainer sprites to make it not instant
    setInterval(ChangeSprite, 300)
    //waits 0.5 seconds to make the ball shake animation not instant
    setInterval(BallShake, 500)
    //waits 4.5 seconds to add suspence to if the user won or not
    setInterval(Final, 4500)
}


/**
 * creates a back ground and loads the trainer sprites if conditions are met and grass
*/
function draw() {
    background(0, 255, 255)
    //grass
    push()
    noStroke()
    fill(112, 192, 160)
    rect(0, 150, 800, 800,)
    pop()
    //sprites
    Sprite1()
    Sprite2()
    Sprite3()
    Sprite4()


    //loads the first trainer spite and text if the game hasnt started yet
    if (start === 1) {
    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("Press the keyboard to catch the pokemon", 400, 20)
    pop()
    }
    //if the user fails atleast once display this text
    if (start === 1 && fail === 1){
    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("Oh no! it broke out. Try again", 400, 40)  
    pop()
    }
    // if the user wins display this text
    if (win === 1){
    textSize(30)
    push()
    textAlign(CENTER, CENTER)
    text("Congradulations you caught a little guy", 400, 40)
    pop()
    }

    //if the pokemon isnt in the ball render it
    if (ball === 0) {
        push()
        drawlittleguy(translate(350, -50))
        pop()
    }
    //when the thowing animation is finished creates the ball and makes it move diaganaly 
    if (throw1 === 1) {
        push()
        drawpokeball(translate(BX1++, BY1--))
        pop()
    }
    // when the ball reaches the pokemon stop rendering it and set the location back to the start if the user fails and sets ball to 1
    if (BX1 >= 320) {
        throw1 = 0
        ball = 1
        BX1 = -20
        BY1 = 350

    }
    //when ball is set to 1 renders a pokeball in the last location of the moving pokeball to avoid jitering
    if (ball === 1 && S0 === 0) {
        shake3 = 1
    }
    //location of the right pokeball shake
    if (shake1 === 1) {
        push()
        drawpokeball(translate(BX2 + 5, BY2),)
        pop()
    }
    //location of the left pokeball shake
    if (shake2 === 1) {
        push()
        drawpokeball(translate(BX2 - 5, BY2),)
        pop()
    }
    //location of the normal pokeball location
    if (shake3 === 1) {
        push()
        drawpokeball(translate(BX2, BY2))
        pop()
    }
    //when the shake animation is done sets the shake animation back to 0 if the user fails and sets wait to 1
    if (S3 === 1) {
        shake1 = 0
        shake2 = 0
        shake3 = 0
        S1 = 0
        S2 = 0
        S3 = 0
        wait = 1
    }
    //renders a still pokeball for 4.5 seconds when the user is waiting to see if they won when S4=1
    if (S4 === 1){
    drawpokeball(translate(BX2, BY2))
    }


}

//changes the trainer sprites every 0.3 seconds but does not loop
function ChangeSprite() {
    if (start === 1 && Input === 1) {
        t1 = 0
        t2 = 1
        start = 0
        Input = 0
    }

    else if (t2 === 1) {
        t2 = 0
        t3 = 1
    }

    else if (t3 === 1) {
        t3 = 0
        t4 = 1
    }
    //sets input to 0 so it doesnt loop and starts the throw animation by setting throw1 to 1
    else if (t4 === 1) {
        t4 = 0
        t1 = 1
        throw1 = 1
        Input = 0
    }
}
//causes the shake animation thaat does not loop
function BallShake() {
    if (shake3 === 1 && S1 === 0 && S2 === 0 && S3 === 0) {
        shake1 = 1
        shake3 = 0
        S0 = 1
        shakeA.play()
    }
    else if (shake1 === 1 && S1 === 0 && S2 === 0 && S3 === 0) {
        shake1 = 0
        shake2 = 1
    }
    else if (shake2 === 1 && S1 === 0 && S2 === 0 && S3 === 0) {
        shake2 = 0
        shake1 = 1
        S1 = 1

    }
    else if (shake1 === 1 && S1 === 1 && S2 === 0 && S3 === 0) {
        shake1 = 0
        shake2 = 1
    }

    else if (shake2 === 1 && S1 === 1 && S2 === 0 && S3 === 0) {
        shake2 = 0
        shake1 = 1
        S1 = 0
        S2 = 1
    }

    else if (shake1 === 1 && S1 === 0 && S2 === 1 && S3 === 0) {
        shake1 = 0
        shake2 = 1
    }
    else if (shake2 === 1 && S1 === 0 && S2 === 1 && S3 === 0) {
        shake2 = 0
        S2 = 0
        S4 = 1
        wait = 1
    }
}

//when the shake animation is done picks a number between 1 and 10 if its higher or equal to 7 you win if its not start everthing from the begining
function Final() {
    //picks a random number between 1-10 for chance sets wait to 0 so it does it once, sets Escape to 1 and sets S4 to 0 to remove pokeball
    if (wait === 1) {
        chance = floor(random(7, 10))
        wait = 0
        Escape = 1 // usesed to make sure fail condition isnt triggered all the time because !changce === 0 doesnt work for some reason
        S4 = 0
    }
    //if change is higher or equal to 7 set win to 1 and end the game
    if (chance >= 7) {
            win = 1
            wait = 0
    }
    //makes it so win audio only plays once
    if (WinA === 0 && win === 1){
        WinA = 1
        catchA.play()
    }

    //if change is lower than 7 and escape is set to 1 sets a bunch of veriables back to 0 just to be safe and adds 1 to the fail variable to know if the user failed atleast once
    if (chance <= 6 && Escape === 1) {
            chance = false
            wait = 0
            ball = 0
            start = 1
            Input = 0
            fail = 1
            Escape = 0
            throw1 = 0
            shake1 = 0
            shake2 = 0
            shake3 = 0
            S0 = 0
            S1 = 0
            S2 = 0
            S3 = 0
    }
}







//draws the pokeball
function drawpokeball() {
    //red part
    push()
    fill(255, 10, 10)
    circle(250, 250, 100)
    pop()
    //white part
    push()
    fill(255, 255, 255)
    arc(250, 250, 100, 100, 0, PI)
    pop()
    //the middle line
    push()
    fill(255, 255, 255)
    stroke(5)
    line(200, 250, 300, 250)
    pop()
    //the middle circle button
    push()
    fill(255, 255, 255)
    stroke(50)
    circle(250, 250, 10)
    pop()
}

//draws a little guy
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


//renders trainer 1 if condition is met
function Sprite1() {
    if (t1 === 1) {
        push()
        image(trainer1, 0, 600, 200, 200)
        pop()
    }
}
//renders trainer 2 if condition is met
function Sprite2() {
    if (t2 === 1) {
        push()
        image(trainer2, 0, 600, 200, 200)
        pop()
    }
}
//renders trainer 3 if condition is met
function Sprite3() {
    if (t3 === 1) {
        push()
        image(trainer3, 0, 600, 200, 200)
        pop()
    }
}
//renders trainer 4 if condition is met
function Sprite4() {
    if (t4 === 1) {
        push()
        image(trainer4, 0, 600, 200, 200)
        pop()
    }
}



//checks is the user presses a key
function keyPressed() {
    Input = 1
}