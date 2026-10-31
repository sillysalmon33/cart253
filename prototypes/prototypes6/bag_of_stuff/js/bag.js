/**
 * Bag of stuff
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// little guy lets you pick stuff from his bag for halloween (hopefully you get somthing good)

let Prices = [NULL1, Candy, Pie, Nothing, Money, Cristian] //NULL1 is the base when nothing is on screen (cant put just null as its already a function)
let yayA //fnaf yay sfx, for when you get something nice
let YayAR // reversed yay sfx for when you get money but he puts it back in the bag
let SadA
let huu //meme huu sfx for when you get a weird item
let TexB
let CricketsA //crickets sfx for when you get nothung
let PieI //pie image for when you get pied
let PieA //pie sound for when you get pied
let CristianA  //cristian image


/**
 * creates a canvas and loads 2 sounds and an image
*/
async function setup() {
    createCanvas(900, 900)
    SadA = await loadSound('assets/sounds/sad.mp3')
    //yayA = await loadSound('assets/sounds/FILE.mp3')
    //yayAR = await loadSound('assets/sounds/FILE.mp3')
    //CricketsA = await loadSound('assets/sounds/FILE.mp3')
    //PieA = await loadSound('assets/sounds/FILE.mp3')
    //PieI = await loadImage('assets/images/FILE.png')
    //CristianA = await loadImage('assets/images/FILE.png')
    TextB = await loadImage('assets/images/textb.png')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0)

    DrawLittleGuy(translate(100, 300,))
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