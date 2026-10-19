/**
 * code
 * kosta
 * 
 * You are trying to write some code for your project. LETS HOPE NOTHING GOES WRONG!!!!!!!!!
 */

"use strict";


let finish = 0
let myInput
let choice = 0
let CodeImage
let Button


// edit code image

/**
 * loads a canvas images and creates a text box where you can write anything
*/
async function setup() {
    createCanvas(800, 800)
    CodeImage = await loadImage("assets/images/code.PNG")
    Button = await loadImage('assets/images/button.png')
    myInput = createInput()
    myInput.position(870, 300)



    
}


/**
 * creates a background
*/
function draw() {
    background(255, 255, 255)



//unless the submit button is pressed displays text and an image
if (finish === 0){
    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text("Please write code: Text ('hello world,' 400, 20)", 400, 20)
    pop()

    push()
    image (Button, 350, 500, 100, 100)
    pop()
}

//activates if the button image is pressed
if (finish === 1) {
    //loads the failed code image
    image(CodeImage, 0,0,800,800)
    //moves the text box off screen to make it look like it disapeared
    myInput.position(1000,1000)
}




//if the mouse is clicked on the button image change the scene
//the code does not actually check if anything was written as it doesnt change the outcome no matter what you write
if (mouseX >= 350 && mouseX <= 450 && mouseY >= 500 && mouseY <= 600 && finish === 0 && choice === 1) {
        finish = 1
    }
    //sets choice back to 0 if the mouse is clikced not on the button
    else(choice = 0)




}

//make the mouse functional
function mousePressed() {
choice = 1
}
