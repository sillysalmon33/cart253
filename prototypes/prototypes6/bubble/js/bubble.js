/**
 * Bubbles
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//ever couple of seconds a bubble spawns that the user can pop (will play a popping sound) and if all the bubbles are popped a sad face apears asking why you poped all the bubbles (add bubble icon for the site in the html file)  if there are less bubbles, the bubbles apear faster.

let Bubbles = []
let Fast = false
let Finished = false
let popsound
let B1 = 1
let B2 = 0
let max = 0


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000)


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(50, 35, 90)

    for (let bubble of Bubbles) {
        Bubble(bubble)
    }

    blowslow()
    blowfast()

}
//creates bubbles at the random location specified in bubble.D
function Bubble(bubbleD) {
    //bubble
    push()
    noStroke()
    fill(30, 20, 225, 90)
    circle(bubbleD.x, bubbleD.y, 40)
    pop()
    //highlight
    push()
    noStroke()
    fill(255, 255, 255, 50)
    circle(bubbleD.x + 10, bubbleD.y - 10, 15)
    pop()
}
//creates a new bubble at a random location
function BlowBubble() {
    let bubbleD = {
        x: random(10, width),
        y: random(10, height),
    }
    return bubbleD;
}
//creates a bubble in the array and on screen at a random location
function BlowBubblesNow() {
    let bubble = BlowBubble()
    Bubbles.push(bubble)
}

//creates bubbles slowly
//if the max amount of bubbles hasnt been reached add 1 to B1
function blowslow() {
    if (max < 50 && Fast === false) {
        B1++
    }
    //if the max amount of bubbles hasnt bean reached and B1 is 50 set B1 back to 1,create a bubble, and add 1 to max
    if (B1 === 50 && max < 50) {
        B1 = 1
        max++
        BlowBubblesNow()
    }
}

//creates bubbles fast
//if the max amount of bubbles hasnt been reached add 1 to B2
function blowfast() {
    if (max < 50 && Fast == true) {
        B2++
    }
    //if the max amount of bubbles hasnt bean reached and B2 is 20 set B2 back to 1,create a bubble, and add 1 to max
    if (B2 === 20 && max < 50) {
        B2 = 1
        max++
        BlowBubblesNow()
    }
}