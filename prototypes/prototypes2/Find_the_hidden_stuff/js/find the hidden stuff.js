/**
 * find the hidden stuff
 * kosta
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let secrets
let secret_text
let waving
let cristian

/**
 * creates a canvas
*/
async function setup() {
    createCanvas(1000, 1000)
    waving = await loadImage('images/waving.gif')
    cristian = await loadImage('images/screamingcristian.jpg')
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 255, 255)

    //add a function where if you look at a secret (x and y cordanites = the secret x and y cordanites) it puts +1 to a counter and when you get all the secrets it shows text that says congrats or somthing

    push()
    image(waving, 500, 200, 70, 70)
    pop()

    push()
    translate(90, 500)
    scale(0.5)
    drawlittleguy()
    pop()


    push()
    image(cristian, 700, 700, 70, 70)
    pop()

    push()
    scale(0.2)
    translate(200, 500)
    drawflower()
    pop()

    push()
    translate(800, 900)
    scale(0.2)
    drawmilkshake()
    pop()

    //creates a circle that can reveal stuff
    push()
    noStroke()
    fill(255, 255, 255)
    circle(mouseX, mouseY, 100,)
    pop()


    //creates unremovable text
    push()
    textSize(20)
    textAlign(CENTER, TOP)
    text('Move the mouse the find all the secrets', 500, 10)
    pop()

    //function
    push()
    textSize(20)
    textAlign(CENTER, TOP)
    fill(secret_text)
    text('Congradulations you won', 500, 30)
    pop()

    //this code doesnt work and probly isnt even close its just a place holder
    push()
    //  if (mousex, mouseY = x, y(secret_text + 1))

    //       if (secrets === 4(secret_text = 255, 255, 255))
    pop()



    /**
     * draws a little guy
     */
    function drawlittleguy() {
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


    function drawflower() {
        //creates background petal
        push()
        fill(209, 93, 215)
        noStroke()
        bezier(230, 200, 230, 330, 125, 550, 300, 330)
        pop()


        //creates stem
        push()
        stroke(52, 173, 84)
        strokeWeight(15)
        line(235, 500, 235, 230)
        pop()


        //creates left petal
        push()
        noStroke()
        fill(229, 113, 235)
        translate(30, -30,)
        bezier(250, 230, 350, 270, 275, 550, 200, 320)
        pop()

        //creates right petal
        push()
        fill(229, 113, 235)
        noStroke()
        bezier(280, 200, 230, 330, 125, 550, 150, 175)
        pop()

        /**
         * fixes left petal to make it look curved
        */

        //creates a circle that's the same colour as the background to hide the sharp edges
        push()
        noStroke()
        fill(0, 255, 255)
        circle(150, 190, 150)
        pop()

        //creates a cirlce that makes the flower look curved
        push()
        noStroke()
        fill(229, 113, 235)
        circle(210, 253, 130)
        pop()

    }

    function drawmilkshake() {
        //creates the straw
        push()
        stroke(255, 235, 235)
        strokeWeight(10)
        line(275, 175, 350, 75)
        pop()

        //creates the red lines on the straw
        push()
        stroke(224, 29, 29)
        strokeWeight(3)
        line(295, 142, 300, 148)
        line(305, 128, 310, 135)
        line(315, 115, 320, 122)
        line(325, 102, 330, 110)
        line(335, 87, 340, 95)
        pop()

        //creates the drink
        push()
        fill(255, 192, 203)
        bezier(150, 200, 250, 750, 250, 500, 350, 200)
        pop()


        //creates the wipped cream
        push()
        fill(255, 245, 245)
        noStroke()
        bezier(150, 200, 150, 200, 220, 90, 350, 200)
        bezier(150, 200, 150, 150, 220, 170, 350, 200)
        bezier(150, 200, 150, 100, 220, 200, 350, 200)
        pop()


        //creates the cup
        push()
        fill(255, 255, 255, 100)
        noStroke()
        bezier(150, 200, 250, 750, 250, 500, 350, 200)
        pop()

        //creates the highlight
        push()
        fill(255, 255, 255, 180)
        noStroke()
        circle(190, 230, 50,)
        pop()

        //creates the lines

        push()
        noFill()
        strokeWeight(0.7)
        bezier(180, 200, 250, 800, 250, 300, 250, 700)
        bezier(210, 200, 250, 800, 250, 300, 250, 700)
        bezier(240, 200, 250, 800, 250, 300, 250, 700)
        bezier(270, 200, 250, 800, 250, 300, 50, 700)
        bezier(300, 200, 250, 800, 200, 300, 250, 700)
        bezier(325, 200, 240, 800, 200, 300, 250, 700)
        pop()


    }
}