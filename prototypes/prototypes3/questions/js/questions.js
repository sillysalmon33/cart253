/**
 *questions
 kosta
 * 
 *Answer some super tough and thought provoking questions
 */

"use strict";


//creates images, and answer and question and finished variables
let cat
let dog
let halloween
let christmas
let noelling
let chudlling
let A1 = 0
let A2 = 0
let A3 = 0
let A4 = 0
let A5 = 0
let Q1 = 0
let Q2 = 1
let Q3 = 1
let Q4 = 1
let Q5 = 1
let choice = 0
let finished = 0

/**
 * creates a canvas and loads images
*/
async function setup() {
    createCanvas(800, 800)
    cat = await loadImage('images/cat.jpg')
    dog = await loadImage('images/dog.jpg')
    halloween = await loadImage('images/halloween.jpg')
    christmas = await loadImage('images/christmas.jpg')
    noelling = await loadImage('images/noelling.jpg')
    chudlling = await loadImage('images/chudlling.jpg')
}


/**
 * loads a background
*/
function draw() {
    background(255, 255, 255)



    //loads cat and dog images and text
    if (Q1 === 0) {
        push()
        image(dog, 0, 0, 400, 800)
        image(cat, 400, 0, 400, 800)
        pop()
    }

    //if mouse is clicked on the left side on the first question set A1 to 0 and switches questions and sets the mouse/choice back to 0
    if (Q1 === 0 && mouseX < 400 && choice === 1) {
        A1 = 0
        Q2 = 0
        Q1 = 1
        choice = 0
    }

    //if mouse is clicked on the right side on the first question set A1 to 1 and switches questions and sets the mouse/choice back to 0
    if (Q1 === 0 && mouseX > 400 && choice === 1) {
        A1 = 1
        Q2 = 0
        Q1 = 1
        choice = 0
    }


            //creates a red and blue rectangue on each side and text if the second question is active
            if (Q2 === 0) {
                push()
                fill(255, 0, 0)
                rect(0, 0, 400, 800,)
                pop()
                push()
                fill(0, 0, 255)
                rect(400, 0, 400, 800,)
                pop()
                }

                //if mouse is clicked on the left side set A2 to 0 and switches questions and sets the mouse/choice back to 0
                if (Q2 === 0 && mouseX < 400 && choice === 1) {
                    Q2 = 1
                    A2 = 0
                    Q3 = 0
                    choice = 0
                }

                //if mouse is clicked on the right side set A2 to 1 and switches questions and sets the mouse/choice back to 0
                if (Q2 === 0 && mouseX > 400 && choice === 1) {
                    Q2 = 1
                    A2 = 1
                    Q3 = 0
                    choice = 0
                }


                        //loads halloween and christmas images and text if the third question is active
                        if (Q3 === 0) {
                            push()
                            image(halloween, 0, 0, 400, 800)
                            image(christmas, 400, 0, 400, 800)
                            pop()
                        }

                        //if mouse clicked on the left side  set A3 to 0 and switches questions and sets the mouse/choice back to 0
                        if (Q3 === 0 && mouseX < 400 && choice === 1) {
                            Q4 = 0
                            A3 = 0
                            Q3 = 1
                            choice = 0
                        }

                        //if mouse is clicked on the right side set A3 to 1 and switches questions and sets the mouse/choice back to 0
                        if (Q3 === 0 && mouseX > 400 && choice === 1) {
                            Q4 = 0
                            A3 = 1
                            Q3 = 1
                            choice = 0
                        }

                                    //creates 2 images and text if the forth question is active
                                    if (Q4 === 0) {
                                        push()
                                        image(noelling, 0, 0, 400, 800)
                                        image(chudlling, 400, 0, 400, 800)
                                        pop()
                                    }

                                    //if mouse is clicked on the left side set A4 to 0 and switches questions and sets the mouse/choice back to 0
                                    if (Q4 === 0 && mouseX < 400 && choice === 1) {
                                        Q4 = 1
                                        A4 = 0
                                        Q5 = 0
                                        choice = 0
                                    }

                                    //if mouse is clicked on the right side set A4 to 1 and switches questions and sets the mouse/choice back to 0
                                    if (Q4 === 0 && mouseX > 400 && choice === 1) {
                                        Q4 = 1
                                        A4 = 1
                                        Q5 = 0
                                        choice = 0
                                    }
                                                //creates text if the Fifth question is active
                                                if (Q5 === 0) {
                                                push()
                                                textSize(30)
                                                text("I like this Project", 100, 400,)
                                                pop()
                                                push()
                                                textSize(30)
                                                text("I Hate this Project", 500, 400,)
                                                pop()
                                            }

                                            //if mouse is clicked on the left side A5 and set finished to 1 and sets the mouse/choice back to 0
                                            if (Q5 === 0 && mouseX < 400 && choice === 1 ) {
                                                Q5 = 1
                                                A5 = 1
                                                choice = 0
                                                finished = 1
                                            }

                                            //if mouse is clicked on the right side set A5 to 1 and finished to 1 and sets the mouse/choice back to 0
                                            if (Q5 === 0 && mouseX > 400 && choice === 1) {
                                                Q5 = 1
                                                A5 = 0
                                                choice = 0
                                                finished = 1
                                            }

if (finished === 0){
    push()
    textSize(30)
    text("Press Mouse to Pick which is your favorite", 150, 40,)
    pop()
}

    //if finished is set to 1 show results based on answers                                        
if (finished === 1) {
    push()
    textSize(30)
    text("Congradulations, here are your results, you chose",100,40)
    pop()
    
    
    //displays dogs answer
    if (A1 === 0) {
    push()
    textSize(50)
    text("Dogs over cats",250,100)
    pop()
    }
    //displays cats answer
    if (A1 === 1) {
    push()
    textSize(40)
    text("cats over dogs",250,100)
    pop()
    }
        //displays red answer
        if (A2 === 0) {
        push()
        textSize(40)
        text("Red over blue",250,200)
        pop()
    }
        //displays blue answer
        if (A2 === 1) {
        push()
        textSize(40)
        text("Blue over red", 250,200)
        pop()
        }
            //displays halloween answer
            if (A3 === 0) {
            push()
            textSize(40)
            text("Halloween over Christmas", 250,300)
            pop()
            }
            //displays christmas answer
            if (A3 === 1) {
            push()
            textSize(40)
            text("Christmas over Halloween", 250,300)
            pop()
            }
                //displays Noelling answer
                if (A4 === 0) {
                push()
                textSize(40)
                text("Noelling over Chudlling", 250,400)
                pop()
                }
                //displays Chudlling answer
                if(A4 === 1) {
                push()
                textSize(40)
                text("Chudlling over Noelling",250,400)
                pop()
                }
                    //displays like answer
                    if (A5 === 0) {
                    push()
                    textSize(40)
                    text("And you liked this Project :)", 250,500)
                    pop()
                    }
                    //displays hate answer
                    if (A5 === 1) {
                    push()
                    textSize(40)
                    text("And you hated this Project :(", 250,500)
                    pop()
                    }
    }
}



// if the mouse is clicked chanced choice to 1 which let the game know the user made a choice 
function mousePressed() {
    choice = 1
}