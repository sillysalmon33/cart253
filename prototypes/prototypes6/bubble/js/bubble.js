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
let Started = false
let Finished = false
let popsound
let Emoji
let sad
let AudioTrigger = 0
let B1 = 0
let B2 = 0
let B3 = 0
let NumberOfBubbles = 0
let MaxBubbles = 50



/**
 * createss a 900 by 900 canvas and loads 2 sounds and a
*/
async function setup() {
    createCanvas(900, 900)
    popsound = await loadSound('assets/sounds/pop.mp3')
    sad = await loadSound('assets/sounds/sad.mp3')
    Emoji = await loadImage('assets/images/DustEmoji.gif')
}


/**
 * draws a background and loads code to create bubbles
*/
function draw() {
    background(50, 35, 90)

    //creates the bubbles in an array
    for (let bubble of Bubbles) {
        Bubble(bubble)
    }
    
    //blows bubbles every ~5 seconds
    blowslow()
    //blows bubbles every ~2 seconds
    blowfast()
    //blows bubbles extremely fast for the first 25 bubbles if the user hasnt popped any bubbles
    blowSuperfast()

    //when the number of bubbles is 25 make bubbles spawn slower
    if (NumberOfBubbles > 25){
        Fast = false
    }
    //if no bubbles where popped display this text
    if (Started === false){
        push()
        textSize(20)
        textAlign(CENTER, TOP)
        text("Try to pop all the bubbles with your mouse", 450, 20)
        pop()
    }
    //when all the bubbles have been popped and the game has started finish the game and stop bubbles from spawning
    if (NumberOfBubbles === 0 && Started === true) {
    Finished = true
}
    //if the game is finished display text and an image and adds 1 to audio trigger
    if (Finished === true){
        push()
        image(Emoji, 0, 0, width, height)
        pop()

        push()
        textSize(50)
        textAlign(CENTER, CENTER)
        text("Why did you pop all the bubbles 🥺", 450, 450)
        pop()
        AudioTrigger++
    }

    // if Audio trigger is 1 play a sad sfx
    if (AudioTrigger === 1){
        sad.play()
    }
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
        x: random(20, width - 20),
        y: random(20, height - 20),
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
//if the max Number Of Bubbles hasnt been reached, and if fast and finished are false add, 1 to B1
function blowslow() {
    if (NumberOfBubbles < MaxBubbles && Fast === false && Finished === false) {
        B1++
    }
    //if the max Number Of Bubbles hasnt been reached and B1 is 200 set B1 back to 1,create a bubble, and add 1 to NumberOfBubbles
    if (B1 === 200 && NumberOfBubbles < MaxBubbles ) {
        B1 = 1
        NumberOfBubbles++
        BlowBubblesNow()
    }
}

//creates bubbles fast
//if the max Number Of Bubbles hasnt been reached, and if fast is true and finished is false, add 1 to B2
function blowfast() {
    if (NumberOfBubbles < MaxBubbles && Fast == true && Finished === false) {
        B2++
    }
    //if the max Number Of Bubbles hasnt been reached and B2 is 75 set B2 back to 1,create a bubble, and add 1 to NumberOfBubbles
    if (B2 === 75 && NumberOfBubbles < MaxBubbles) {
        B2 = 1
        NumberOfBubbles++
        BlowBubblesNow()
    }
}

//creates bubbles super fast if the user hasnt popped a bubble yet for the fisrt 25 bubbles
//if the max Number Of Bubbles hasnt been reached, and if started and finished is false, add 1 to B3
function blowSuperfast() {
    if (NumberOfBubbles < MaxBubbles && Started == false && Finished === false) {
        B3++
    }
    //if the Number Of Bubbles less than 25 and B3 is 10 set B3 back to 1,create a bubble, and add 1 to NumberOfBubbles
    if (B3 === 10 && NumberOfBubbles < 25) {
        B3 = 1
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
