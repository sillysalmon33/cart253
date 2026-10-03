/**
 *questions
 kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let cat
let catQ = 0
let dog
let dogQ = 0
let redQ = 0
let blueQ = 0
let Q1 = 0
let Q2 = 1
let Q3 = 1
let Q4 = 1
let Q5 = 1
let finished = 0

/**
 * creates a canvas and loads images
*/
async function setup() {
    createCanvas(800,800)
    cat = await loadImage('images/cat.jpg')
    dog = await loadImage('images/dog.jpg')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255,255,255)

    //put text on screen if the challenge isnt done
    if (finished === 0){
        textSize(20)
        text("Pick which is your favorite", 400, 30,)
    }
    //loads 2 images on either end of the canvas
    if (Q1 === 0) {
    image(dog, 200, 400, 400, 800)
    image(cat, 600, 400, 400, 800)
    }

    //if the mouse is clicked on the left side on the first question set dog to 1 and switches questions
    if (Q1 === 0 && mouseX <400 && mouseClicked()) {
        Q1 = 1 
        dogQ = 1
        Q2 = 0
    }
    //if the mouse is clicked on the right side on the first question set cat to 1 and switches questions
    if (Q1 === 0 && mouseX >400 && mouseClicked()) {
        Q1 = 1 
        catQ = 1
        Q2 = 0
    }


    //creates a red and blue rectangue on each side if the second question is active
    if (Q2 === 0) {
    rect(x, y, w, h, [tl], [tr], [br], [bl])
    rect(x, y, w, h, [tl], [tr], [br], [bl])
    }

    //if the mouse is clicked on the left side on the first question set red to 1 and switches questions
    if (Q2 === 0 && mouseX <400 && mouseClicked()) {
        Q1 = 1 
        redQ = 1
        Q3 = 0
    }
    
     //if the mouse is clicked on the right side on the first question set blue to 1 and switches questions
    if (Q2 === 0 && mouseX >400 && mouseClicked()) {
        Q2 = 1 
        blueQ = 1
        Q3 = 0
    }

}