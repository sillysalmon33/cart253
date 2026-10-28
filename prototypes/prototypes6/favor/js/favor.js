/**
 * Title of Project
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//the little guy asks you to do a quick favor (click some stuff that aprears in random positions, keep your mouse in a spot for a few seconds, set a color picker to a specific color) but the game never ends and he keeps on saying your almost their but eventually his dialogue loops and you never finish

let Dialogue = []
let Button = []
let colorPicker
let YourAnswer = "#ffffff"


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(900, 900)

    colorPicker = createColorPicker('white')
    colorPicker.position(500, 500) // replace with x and y values that are randomly generated (the values change by adding and then subtracting a number to move it on and off screen when needed)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 255, 255)

    YourAnswer = colorPicker.value()
}




