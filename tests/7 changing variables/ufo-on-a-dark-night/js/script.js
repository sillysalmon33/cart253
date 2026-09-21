// Our UFO
let ufo = {
    // Position
    x: 200,
    y: 375,
    // Dimensions
    width: 150,
    height: 50,
    // Fill colour (greyscale)
    fill: 255
};

// Shade to fill the sky (background)
let skyShade = 0;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Displays a UFO taking off and flying away 
*/
function draw() {
    // Sky shade goes up
    // The sky gradually turns bright white!
    skyShade = skyShade + 1;
    // Display the sky
    background(skyShade);

    // The UFO goes up
    // We have lift-off!
    ufo.y = ufo.y - 2;

    // The UFO goes right
    // Course adjustment for Beetlegeuse
    ufo.x = ufo.x + 0.5;

    // UFO gradually becomes darker
    // I mean, activating quantum thrust transition...
    ufo.fill = ufo.fill * 0.999;

    // UFO's dimensions become smaller over time
    // ... as it flies away into the distance! ET... gone home...
    ufo.width = ufo.width / 1.005;
    ufo.height = ufo.height / 1.005;

    // Draw the UFO based on its properties
    push();
    fill(ufo.fill);
    noStroke();
    ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
    pop();
}