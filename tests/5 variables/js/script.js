// Our cheese colour broken into RGB
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 255;

// Our cheese hole
let holeShade = 0; // Greyscale value for the hole
let holeX = 140; // x-coordinate of the hole
let holeY = 175; // y-coordinate of the hole
let holeSize = 180; // Diameter of the hole

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    // Cheese colour (yellow)
    background(cheeseRed, cheeseGreen, cheeseBlue);

    // Draw a hole in the upper left
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}