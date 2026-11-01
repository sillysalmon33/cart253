/**
 * Bag of stuff
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// little guy lets you pick stuff from his bag for halloween (hopefully you get somthing good)

let Prices = ["Candy", "PUT SOMTHING", "Nothing", "Money", "Happy"]
let Dialogue = ["Nice you got some candy", "Oh you got nothing... that sucks", "Damm your lucky", "IDK who this guy is"]
let DialogueIndex = 0
let CurrentDialogue = "Happy (late) Halloween, try your luck and you what you get"
let Pick = false
let Sounds = false
let size = 100
let wait = 0
let BowlA
let MoneyA
let CandyA
let yayA
let YayAR // reversed yay sfx for when you get money but he puts it back in the bag
let SadA
let huu //meme huu sfx for when you get a weird item
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
    //yayAR = await loadSound('assets/sounds/FILE.mp3')
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
    background(255,0,255)

    PlaySounds()

    push()
    DrawLittleGuy(translate(500, 300,))
    pop()

    push()
    image(TextB, 500, 270, 250,250)
    pop()

    push()
    textSize(15)
    textAlign(CENTER, CENTER)
    text(`${CurrentDialogue}`,520, 380,200)
    text(`${Pick}`, 100,100)
    pop()


//if the specific word in the array is selected render an image that grows to a set amount and play a sound
        if (Pick === "Candy"){
        push()
        image(CandyA, 400,400,size+=1,size+=1)
        Sounds++
        pop()
        }

            if (Pick === "PUT SOMTHING"){
            push()
            image(HappyA, 400,400,size+=1,size+=1)
            pop()
            }

                if (Pick === "Nothing"){
                push()
                Sounds++
                pop()
                }
    
                    if (Pick === "Money"){
                    push()
                    image(MoneyA, 400,400,size+=1,size+=1)
                    Sounds++
                    pop()
                    }

                        if (Pick === "Happy"){
                        push()
                        image(HappyA, 400,400,size+=1,size+=1)
                        Sounds++
                        pop()
                        }



    //the max size of the images
    if (size > 250){
        size = 250
    }
}
//plays the coresponding sound 1 when a word in the array is chosen
function PlaySounds() {

if (Pick === "Candy" && Sounds === 1 ) {
    yayA.play()
}
    else if (Pick === "PUT SOMTHING" && Sounds === 1){
        //PUT SOMTHING
    }
        else if (Pick === "Nothing" && Sounds === 1){
        CricketsA.play()
        }
            else if (Pick === "Money" && Sounds === 1){
            yayA.play()
            }
                else if (Pick === "Happy" && Sounds === 1){
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
Pick = random(Prices)
CurrentDialogue = random(Dialogue)
//resets the sound variable to another sound can be played
Sounds = 0
size = 100
}