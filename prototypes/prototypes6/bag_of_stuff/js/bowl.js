/**
 * Bowl of stuff
 * Konstantinos
 * 
 * Its Halloween and your at a little guy's house for trick or treating, lets see what you'll get
 */

"use strict";

// little guy lets you pick stuff from his bag for halloween (hopefully you get somthing good)

let Prices = ["Candy", "Meta", "Nothing", "Money", "Happy"]
let CurrentDialogue = "Happy (late) Halloween, try your luck and you what you get"
let Pick = false
let Sounds = false
let size = 100
let x = 300
let y = 270
let wait = 0
let BowlA
let MoneyA
let CandyA
let yayA
let MetaI
let SadA
let TextB
let CricketsA
let HappyA  //cristian image
let Interact = true


/**
 * creates a canvas and loads 2 sounds and an image
*/
async function setup() {
    createCanvas(900, 900)
    SadA = await loadSound('assets/sounds/sad.mp3')
    yayA = await loadSound('assets/sounds/yay.mp3')
    MetaI = await loadImage('assets/images/bag.png')
    CricketsA = await loadSound('assets/sounds/nothing.mp3')
    BowlA = await loadImage('assets/images/bowl3.png')
    HappyA = await loadImage('assets/images/Steamhappy.png')
    TextB = await loadImage('assets/images/textb.png')
    CandyA = await loadImage('assets/images/candy.jpg')
    MoneyA = await loadImage('assets/images/money.png')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 0, 255)

    PlaySounds()

    push()
    DrawLittleGuy(translate(550, 300,))
    pop()

    push()
    image(BowlA, 250, 300, 300, 300)
    image(TextB, 550, 270, 250, 250)
    pop()

    push()
    textSize(15)
    textAlign(CENTER, CENTER)
    text(`${CurrentDialogue}`, 570, 380, 200)
    pop()


    //if the specific word in the array is selected render an image that grows to a set amount and triggers the Sounds variable
    //the image is also moved backwards and up to a specific amount since making the image bigger moves the image forwards and down
    if (Pick === "Candy") {
        push()
        image(CandyA, x -= 1, y -= 1, size += 1, size += 1)
        Sounds++
        CurrentDialogue = "Nice you got some candy"
        pop()
    }

    if (Pick === "Meta") {
        push()
        image(MetaI, x -= 1, y -= 1, size += 1, size += 1)
        CurrentDialogue = "Wow you got this whole project, how meta"
        pop()
    }

    if (Pick === "Nothing") {
        push()
        Sounds++
        CurrentDialogue = "Oh you got nothing... that sucks"
        pop()
    }

    if (Pick === "Money") {
        push()
        image(MoneyA, x -= 1, y -= 1, size += 1, size += 1)
        Sounds++
        CurrentDialogue = "Damm your lucky"
        pop()
    }

    if (Pick === "Happy") {
        push()
        image(HappyA, x -= 1, y -= 1, size += 1, size += 1)
        Sounds++
        CurrentDialogue = "IDK who this guy is"
        pop()
    }



    //the max size of the images
    if (size > 200) {
        size = 200
    }
    //minumum x location to make it look like the image isnt moving
    if (x < 300) {
        x = 300
    }
    //minumum x location to make it look like the image isnt moving
    if (y < 270) {
        y = 270
    }
}
//plays the coresponding sound 1 when a word in the array is chosen
function PlaySounds() {

    if (Pick === "Candy" && Sounds === 1) {
        yayA.play()
    }
    else if (Pick === "PUT SOMTHING" && Sounds === 1) {
        //PUT SOMTHING
    }
    else if (Pick === "Nothing" && Sounds === 1) {
        CricketsA.play()
    }
    else if (Pick === "Money" && Sounds === 1) {
        yayA.play()
    }
    else if (Pick === "Happy" && Sounds === 1) {
        yayA.play()
    }
}




/**
 * draws a little guy
 */
function DrawLittleGuy() {
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

function mousePressed() {
    //picks a random thing from the prices array
    Pick = random(Prices)
    //resets the sound variable to another sound can be played
    Sounds = 0
    size = 1
    x = 400
    y = 370
}