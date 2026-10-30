/**
 * Favor
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//the little guy asks you to do a quick favor (click some stuff that aprears in random positions, keep your mouse in a spot for a few seconds, set a color picker to a specific color) but the game never ends and he keeps on saying your almost their but eventually his dialogue loops and you never finish

let Dialogue = ["Hey can you do Me a favor I want a different colored background", "Can You change it to", "Actually do", "No Wait do", "Actually That's terrible do", "How About", "Nevermind do"]
let DialogueIndex = 0
let colorPicker
let YourAnswer = "255,0,255"
let Task = undefined
let RA = undefined
let GA = undefined
let BA = undefined
let Choice = 0




/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 900)

    colorPicker = createColorPicker('Cyan')
    colorPicker.position(900, 450) // replace with x and y values that are randomly generated (the values change by adding and then subtracting a number to move it on and off screen when needed)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

    //displays dialogue and the answer
    push()
    textSize(15)
    textAlign(CENTER, CENTER)
    text(`${CurrentDialogue}`,650, 400)
    text(`${RA}, ${GA}, ${BA}?`, 650, 450)
    pop()

    //everytime
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

