// Colour of the sky
let sky = {
    red: 150,
    green: 180,
    blue: 250
};

// The sun
// The sun
let sun = {
    fill: {
        red: 255,
        green: 255,
        blue: 0,
    },
    x: 500,
    y: 70,
    size: 100
};
// My self-esteem
let selfEsteem = {
    shade: 0,
    x: 320,
    y: 320,
    size: 20
};

function setup() {
    // Create the canvas
    createCanvas(640, 320);
}

function draw() {
    // A nice blue sky
    background(sky.red, sky.green, sky.blue);

    // The sun
    push();
    fill(sun.fill.red, sun.fill.green, sun.fill.blue);
    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // My self esteem
    push();
    fill(selfEsteem.shade);
    noStroke();
    ellipse(selfEsteem.x, selfEsteem.y, selfEsteem.size);
    pop();
}