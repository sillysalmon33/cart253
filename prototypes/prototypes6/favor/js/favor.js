/**
 * Favor
 * Konstantinos
 * 
 * A little guy asks you for a favor (surely it wont take long)
 */

"use strict";

let Dialogue = ["Hey can you do Me a favor I want a different colored background. Can You change it to", "hmmmm, can I see", "Actually do", "No Wait do", "Actually That's terrible do", "How About", "Nevermind do"]
let DialogueIndex = 0
let colorPicker
let YourAnswer = undefined
let Task = undefined
let RA = undefined
let GA = undefined
let BA = undefined
let Choice = 0
let textb




/**
 * creates a canvas loads an image and creates a color picker with the cyan color selected
*/
async function setup() {
    createCanvas(900, 900)
    textb = await loadImage('images/textb.png')

    colorPicker = createColorPicker('Cyan')
    colorPicker.position(900, 550)
}


/**
 * sets all the variables for dialogue, color and creates a background with the color of the color picker
*/
function draw() {

    //set the variable for the dialogue
    let CurrentDialogue = Dialogue[DialogueIndex]

    //set the variable for the current color from the color picker
    YourAnswer = colorPicker.value()

    //gets the individual r, g, b values from the color picker
    let R = red(YourAnswer)
    let G = green(YourAnswer)
    let B = blue(YourAnswer)

    //displays the background with the color of the color picker
    background(R, G, B)

    //displays the text bubble and the little guy
    push()
    DrawLittleGuy(translate(500, 350))
    pop()

    push()
    image(textb,450,280,300,300)
    pop()

    //displays dialogue and the answer
    push()
    textSize(15)
    textAlign(CENTER, CENTER)
    text(`${CurrentDialogue}`,500, 400,200)
    text(`${RA}, ${GA}, ${BA}?`, 600, 450)
    pop()






    //everytime the dialogue is switched, picks a random color for the answer and sets Choice 1 ahead of the current
    //  dialogue index number so it only choices a color once, and if it reaches the end of the array set choice to 1 so it can loop
    if (DialogueIndex === 0 && Choice === 0) {
    Choice = 1
    RA = floor(random(1,255))
    GA = floor(random(1,255))
    BA = floor(random(1,255))
    }
    if (DialogueIndex === 1 && Choice === 1) {
        Choice = 2
        RA = floor(random(1,255))
        GA = floor(random(1,255))
        BA = floor(random(1,255))
    }
            if (DialogueIndex === 2 && Choice === 2) {
            Choice = 3
            RA = floor(random(1,255))
            GA = floor(random(1,255))
            BA = floor(random(1,255))
            }
                if (DialogueIndex === 3 && Choice === 3) {
                Choice = 4
                RA = floor(random(1,255))
                GA = floor(random(1,255))
                BA = floor(random(1,255))
                }
                if (DialogueIndex === 4 && Choice === 4) {
                    Choice = 5
                    RA = floor(random(1,255))
                    GA = floor(random(1,255))
                    BA = floor(random(1,255))
                }
                    if (DialogueIndex === 5 && Choice === 5) {
                    Choice = 6
                    RA = floor(random(1,255))
                    GA = floor(random(1,255))
                    BA = floor(random(1,255))
                    }
                        if (DialogueIndex === 6 && Choice === 6) {
                        Choice = 1
                        RA = floor(random(1,255))
                        GA = floor(random(1,255))
                        BA = floor(random(1,255))
                    }

    //checks if the current color picker color is the correct answer, and if so advances the dialogue and if it ends loops it back to the second dialogue
    if (R === RA && G === GA && B === BA ) {
        DialogueIndex = DialogueIndex + 1

    if (DialogueIndex >= Dialogue.length) {
        DialogueIndex = 1
    }
    }
}

/**
 * draws a little guy
 */
function DrawLittleGuy() {
    //main head
    push() 
    fill(255,255,255)
    circle(250,250,100)
    pop()
    //eyes
    push()
    fill(0,0,0)
    circle(220,230,80)
    circle(280,230,80)
    pop()
    //mouth
    push()
    line(230,280,270,280)
    pop()
    //iris'
    push()
    fill(255,255,255)
    noStroke()
    circle(200,220,50)
    circle(270,220,50)
    pop()
}