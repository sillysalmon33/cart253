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
let Fast = true
let Finished = false
let popsound
let B1 = 0
let B2 = 0
let NumberOfBubbles = 0
let MaxBubbles = 50
let Started = false


/**
 * createss a 900 by 900 canvas and loads the pop sound
*/
async function setup() {
    createCanvas(900, 900)
    popsound = await loadSound('assets/sounds/pop.mp3')
}


/**
 * draws a background and loads code to create bubbles
*/
function draw() {
    background(50, 35, 90)
    //creates the bubbles
    for (let bubble of Bubbles) {
        Bubble(bubble)
    }
    //blows bubbles every ~5 seconds
    blowslow()
    //blows bubbles every ~2.5 seconds
    blowfast()

    //when the number of bubbles is 25 make bubbles spawn slower
    if (NumberOfBubbles > 25){
        Fast = false
    }

    //when all the bubbles have been popped and the user pressed a bubble finish the game and stop bubbles from spawning
    if (NumberOfBubbles === 0 && Started === true) {
    Finished = true
}
    //if the game is finished display text and an image
    if (Finished === true){
        push()

        pop()
    }

    fill(0)
textSize(16)

text(`X: ${Finished}, Y: ${NumberOfBubbles}`, 100, 300)

}

//creates bubbles at the random location specified in bubble.D
function Bubble(bubbleD) {
    //bubble
    push()
    noStroke()
    fill(30, 20, 225, 90)
    circle(bubbleD.x, bubbleD.y, bubbleD.size)
    pop()
    //highlight
    push()
    noStroke()
    fill(255, 255, 255, 50)
    circle(bubbleD.x + 10, bubbleD.y - 10, bubbleD.size - 25)
    pop()
}

//creates the values for a new bubble at a random location and set size
function BlowBubble() {
    let bubbleD = {
        x: random(10, width),
        y: random(10, height),
        size:40
    }
    return bubbleD;
}

//creates a bubble in the array and on screen at a random location chosen by BlowBubble
function BlowBubblesNow() {
    let bubble = BlowBubble()
    Bubbles.push(bubble)
}

//creates bubbles slowly
//if the NumberOfBubbles amount of bubbles hasnt been reached, and if fast and finished are false add, 1 to B1
function blowslow() {
    if (NumberOfBubbles < MaxBubbles && Fast === false && Finished === false) {
        B1++
    }
    //if the NumberOfBubbles amount of bubbles hasnt bean reached and B1 is 50 set B1 back to 1,create a bubble, and add 1 to NumberOfBubbles
    if (B1 === 200 && NumberOfBubbles < MaxBubbles ) {
        B1 = 1
        NumberOfBubbles++
        BlowBubblesNow()
    }
}

//creates bubbles fast
//if the max NumberOfBubbles amount hasnt been reached, and if fast is true and finished is false, add 1 to B2
function blowfast() {
    if (NumberOfBubbles < MaxBubbles && Fast == true && Finished === false) {
        B2++
    }
    //if the NumberOfBubbles amount of bubbles hasnt bean reached and B2 is 20 set B2 back to 1,create a bubble, and add 1 to NumberOfBubbles
    if (B2 === 100 && NumberOfBubbles < MaxBubbles) {
        B2 = 1
        NumberOfBubbles++
        BlowBubblesNow()
    }
}

//when a bubble is clicked deletes the bubble that was clicked, subtracts 1 from NumberOfBubbles, and plays the popping sound
function mousePressed() {
    // checks which bubble was clicked
    for (let bubbleD of Bubbles) {
        // gets distance of the mouse and the bubble
        let d = dist(mouseX, mouseY, bubbleD.x, bubbleD.y)
        // if the click was inside a bubble deletes that bubble, subtracts 1 from NumberOfBubbles, and plays a poping sound
        if (d < bubbleD.size / 2) {
            // deletes the bubble from the arrow
            let index = Bubbles.indexOf(bubbleD)
            Bubbles.splice(index, 1)
            NumberOfBubbles--
            popsound.play()
            Started = true
        }
    }
}
