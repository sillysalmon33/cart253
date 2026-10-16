/**
 * catch
 * kosta
 * 
 * You just found a super cool pokemon, test your luck to see if you can catch them.
 */

"use strict";


let win = 0
let start = 1
let chance = 0
let throw1 = 0
let throw2 = 0
let shake1 = 0
let shake2 = 0
let shake3 = 0
let t1 = 1
let t2 = 0
let t3 = 0
let t4 = 0
let ball = 0
let Input = 0
let BX1 = -20
let BY1 = 350
let BX2 = 320
let BY2 = 10
let shakeA
let S0 = 0
let S1 = 0
let S2 = 0
let S3 = 0
let wait
let trainer1
let trainer2
let trainer3
let trainer4

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(800, 800)
    trainer1 = await loadImage('images/trainer1.png')
    trainer2 = await loadImage('images/trainer2.png')
    trainer3 = await loadImage('images/trainer3.png')
    trainer4 = await loadImage('images/trainer4.png')
    //shakeA = await loadSound('images/')

    setInterval(ChangeSprite, 300)
    setInterval(BallShake, 500)
    setInterval(wait, 1000)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 255)

    text(`X: ${chance}, Y: ${mouseY}`, 20, 30)

    Sprite1()
    Sprite2()
    Sprite3()
    Sprite4()


    //loads the first trainer spite and text if the game hasnt started yet
    if (start === 1) {
        push()
        textSize(20)
        textAlign(CENTER, TOP)
        text("Press space to catch the pokemon", 400, 20)
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


}

//changes the trainer sprites every 0.5 seconds but does not loop
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

    else if (t4 === 1) {
        t4 = 0
        t1 = 1
        throw1 = 1
        start = 1
        Input = 0
    }
}
//causes the shake animation thaat does not loop
function BallShake() {
    if (shake3 === 1 && S1 === 0 && S2 === 0 && S3 === 0) {
        shake1 = 1
        shake3 = 0
        S0 = 1
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
        shake1 = 1
        S2 = 0
        S3 = 1
    }
}

//when the shake animation is done 
function Final() {
    if (wait === 1) {
        chance = floor(random(1, 10))
        if (chance >= 6) {
            win = 1
        }
        else if (chance < 6 && !chance === 0) {
            chance = 0
            start = 1
            Input = 0
        }

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

function Sprite1() {
    if (t1 === 1) {
        push()
        image(trainer1, 0, 600, 200, 200)
        pop()
    }
}

function Sprite2() {
    if (t2 === 1) {
        push()
        image(trainer2, 0, 600, 200, 200)
        pop()
    }
}

function Sprite3() {
    if (t3 === 1) {
        push()
        image(trainer3, 0, 600, 200, 200)
        pop()
    }
}

function Sprite4() {
    if (t4 === 1) {
        push()
        image(trainer4, 0, 600, 200, 200)
        pop()
    }
}



function keyPressed() {
    Input = 1
}