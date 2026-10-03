/**
 *questions
 kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let cat
let dog
let halloween
let christmas
let A1 = 0
let A2 = 0
let A3 = 0
let A4 = 0
let A5 = 0
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
    createCanvas(800, 800)
    cat = await loadImage('images/cat.jpg')
    dog = await loadImage('images/dog.jpg')
    halloween = await loadImage('images/halloween.jpg')
    christmas = await loadImage('images/christmas.jpg')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 255)


    //loads 2 images and text on either end of the canvas
    if (Q1 === 0) {
        push()
        image(dog, 0, 0, 400, 800)
        image(cat, 400, 0, 400, 800)
        pop()
        push()
        textSize(30)
        text("Press A to Pick which is your favorite", 150, 40,)
        pop()
    }

    //if the mouse is clicked on the left side on the first question set dog to 1 and switches questions
    if (Q1 === 0 && mouseX < 400 && key === "a") {
        A1 = 0
        Q2 = 0
        Q1 = 1
    }

    //if the mouse is clicked on the right side on the first question set cat to 1 and switches questions
    if (Q1 === 0 && mouseX > 400 && key === "a") {
        A1 = 1
        Q2 = 0
        Q1 = 1
    }


    //creates a red and blue rectangue on each side if the second question is active
    if (Q2 === 0) {
        push()
        fill(255, 0, 0)
        rect(0, 0, 400, 800,)
        pop()
        push()
        fill(0, 0, 255)
        rect(400, 0, 400, 800,)
        push()
        textSize(30)
        text("Press B to Pick which is your favorite", 150, 40,)
        pop()
        pop()
    }

    //if the mouse is clicked on the left side on the first question set red to 1 and switches questions
    if (Q2 === 0 && mouseX < 400 && key === "b") {
        Q2 = 1
        A2 = 0
        Q3 = 0
    }

    //if the mouse is clicked on the right side on the first question set blue to 1 and switches questions
    if (Q2 === 0 && mouseX > 400 && key === "b") {
        Q2 = 1
        A2 = 1
        Q3 = 0
    }


    //creates a red and blue rectangue on each side if the second question is active
    if (Q3 === 0) {
        push()
        image(halloween, 0, 0, 400, 800)
        image(christmas, 400, 0, 400, 800)
        push()
        textSize(30)
        text("Press C to Pick which is your favorite", 150, 40,)
        pop()
        pop()
    }

    //if the mouse is clicked on the left side on the first question set red to 1 and switches questions
    if (Q3 === 0 && mouseX < 400 && key === "c") {
        Q4 = 1
        A3 = 0
        Q3 = 0
    }

    //if the mouse is clicked on the right side on the first question set blue to 1 and switches questions
    if (Q3 === 0 && mouseX > 400 && key === "c") {
        Q4 = 1
        A3 = 1
        Q3 = 0
    }

}
