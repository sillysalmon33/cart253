// My ego
let ego = {
    x: 200,
    y: 200,
    size: 1,
    minSize: 0,
    maxSize: 400,
    fill: 200
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Updates (expands and darkens) and displays the ego
 */
function draw() {
    // Pink background
    background(255, 200, 200);

    // Update the ego
    // Fill gets darker, symbolizing the negative energy
    ego.fill = ego.fill - 0.5;
    // Constrain the fill to be within the normal range of colours, 0-255
    ego.fill = constrain(ego.fill, 0, 255);
    // Size gets bigger, symbolizing taking up emotional space
    ego.size = ego.size + 1;
    // Constrain the ego to be within its defined minimum and maximum
    ego.size = constrain(ego.size, ego.minSize, ego.maxSize);

    // Draw the ego
    push();
    noStroke();
    fill(ego.fill);
    ellipse(ego.x, ego.y, ego.size);
    pop();
}