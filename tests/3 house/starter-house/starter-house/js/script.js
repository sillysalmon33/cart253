/**
 * My House
 * Pippin Barr
 * 
 * Draws a house with shapes.
 * 
 * Disclaimer: Not actually my house.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(640, 480);
}

/**
 * Draws a house
 */
function draw() {
    drawSky();
    drawCloud();
    drawGround();
    drawHouse();
}

/**
 * Draws the sky (nice and blue)
 */
function drawSky() {
    // The sky
    background(150, 200, 250);
}

/**
 * Draws a fluffy white cloud
 */
function drawCloud() {
    // A cloud
    push();
    noStroke();
    fill(255);
    ellipse(100, 100, 100, 100);
    ellipse(180, 80, 100, 100);
    ellipse(160, 120, 60, 60);
    ellipse(190, 130, 60, 60);
    ellipse(220, 120, 60, 60);
    pop();
}

/**
 * Draws the cold, hard ground
 */
function drawGround() {
    // The ground
    push();
    noStroke();
    fill(200);
    rect(0, 400, 640, 480);
    pop();
}

/**
 * Draws a lovely, cosy house with a pointy roof
 */
function drawHouse() {
    drawBody();
    drawRoof();
    drawWindow();
    drawDoor();
}

function drawBody() {
    // The main body of the house
    push();
    noStroke();
    fill(250, 250, 200);
    rect(200, 240, 280, 180);
    pop();
}

/**
 * Draws the roof of our house (a triangle)
 */
function drawRoof() {
    push();
    noStroke();
    fill("#dc143c");
    triangle(180, 240, 340, 120, 500, 240);
    pop();
}

/**
 * Draws a window on our house
 */
function drawWindow() {
    push();
    stroke("deeppink");
    strokeWeight(5);
    fill("blanchedalmond");
    rect(220, 260, 80, 80);
    pop();
}

/**
 * Draws a door and a doorknob on our house
 */
function drawDoor() {
    // The door
    push();
    noStroke();
    fill(0, 128, 0);
    rect(320, 300, 80, 120);
    pop();

    // The doorknob
    push();
    noStroke();
    fill(255, 215, 0);
    ellipse(340, 360, 10, 10);
    pop();
}