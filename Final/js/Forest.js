/**
 * The Forest
 * Konstantinos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * 
 * The player is lost in a forest and everytime they go off screen another set of trees spawn (even if they go backwards so they are trully lost) there are also npcs and 1 can tell them how to escape (go in specific direction up down down down left right) or if you go through too many rooms you get to a road and get run over. and there is also a secret 1% room where you get jumpscared by cristians face and a pitched down version of his scream
 */

"use strict";

//rooms
let NewRoom = 1
let Room = 0
let Forest = 0
let Road = 1
let Bunker = 2
let Lost = 0
let MaxLost = 30
let RunOver = false
let TP = 0
let RightWay = 0

//screens
let Menu = 1

//images and player location
let PlayerA
let TreeI
let GrassI
let CristianI
let KeyI
let PaperI
let P = {
    X: 400,
    Y: 400,
    R: 0
}

//trees
let Trees = []
let CurrentTrees = 0
let MaxTrees = 50

//Dialogue
let DialogueSize = 20
let MaxLength
let Speaker
let Nobody = 0
let LittleGuy = 1
//test
let BigLittleGuy = 2
let DialogueIndex = 0
let CurrentLine = false
let LittleGuyText = ['Hmmm, it looks like your lost.', "I would help you but.", "...", "I dont feel like it."]
//test
let BigLittleGuyText = ['test1', "tes2", "test3", "test4"]

//Events/items
let PickUp = false
let Car = {
    X: 500,
    Y: 1
}
let Spawn = 0
let SpawnL = {
    X:0,
    Y:0,
    Size:50
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(900, 900)
    PlayerA = await loadImage('assets/images/test.jpg')
    KeyI = await loadImage('assets/images/Key.png')
    PaperI = await loadImage('assets/images/tornpaper.png')
    imageMode(CENTER);
    angleMode(DEGREES);



}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 0, 255)

    //creates the Trees in an array
    for (let Tree of Trees) {
        PlaceTree(Tree)
    }

    TitleScreen()
    
    if (Menu === 0) {
    SpawnStuff()
    RoadRoom()
    DrawPlayer(P)
    MovePlayer(P)
    ChangeDirection()
    ChangeRoom()
    LittleGuyDialogue()
    //test
    BigLittleGuyDialogue()
    NewForest()
    RemoveTrees()
    PermRemoveTrees()
    CorrectWay()
    }

    


    text(`X: ${test}, Y: ${P.X}`, 20, 30)


    //test code 2
    if (keyIsDown("b") === true) {
        Room = 1
    }

        //test code 2
    if (keyIsDown("c") === true) {
        RightWay++
    }

    //if the user goes through more rooms than the max number of rooms they enter the lose room
    if (Lost > MaxLost) {
        Room = 1
    }
}

/*
                                    Player Movement
*/

function DrawPlayer(P) {
    push()
    //translate is used so the rotate function doesnt break since it doesnt understand that the location has changed if P.X/P.Y is in image
    translate(P.X, P.Y)
    //rotates the image from the center
    imageMode(CENTER);
    rotate(P.R)
    image(PlayerA, 0, 0, 150, 100)
    pop()

}

//allows the user to move via wasd
function MovePlayer(P) {
    if (keyIsDown("a") === true || keyIsDown("A") === true) {
        P.X -= 1.5
    }
    if (keyIsDown("d") === true || keyIsDown("D") === true) {
        P.X += 1.5
    }
    if (keyIsDown("w") === true || keyIsDown("W") === true) {
        P.Y -= 1.5
    }
    if (keyIsDown("s") === true || keyIsDown("S") === true) {
        P.Y += 1.5
    }
}

//if the user is moving rotates the sprite to face the direction they are facing
function ChangeDirection() {
    if (keyIsDown("w") === true && keyIsDown("a") === true) {
        push()
        P.R = 315
        pop()
    }
    else if (keyIsDown("s") === true && keyIsDown("a") === true) {
        push()
        P.R = 225
        pop()
    }

    else if (keyIsDown("s") === true && keyIsDown("d") === true) {
        push()
        P.R = 135
        pop()
    }
    else if (keyIsDown("w") === true && keyIsDown("d") === true) {
        push()
        P.R = 45
        pop()
    }
    else if (keyIsDown("w")) {
        P.R = 0
    }
    else if (keyIsDown("d")) {
        P.R = 90
    }
    else if (keyIsDown("s")) {
        P.R = 180
    }
    else if (keyIsDown("a")) {
        P.R = 270
    }
    //the default rotation
    else { P.R = 0 }

}
//everytime the player goes off screen teleport them back on the opposite side and add 1 to the Rooms counter
function ChangeRoom() {
    if (P.X <= 0) {
        P.X += 900
        Lost++
        NewRoom = 1
    }
    if (P.X > width) {
        P.X -= 900
        Lost++
        NewRoom = 1
    }
    if (P.Y <= 0) {
        P.Y += 900
        Lost++
        NewRoom = 1
    }
    if (P.Y > height) {
        P.Y -= 900
        Lost++
        NewRoom = 1
    }
}

/*
                                    Random trees for Forest
*/

//creates the sprite for the trees at a random location adn with a random heighth and width
function PlaceTree(TreeD) {
    push()
    image(PlayerA, TreeD.x, TreeD.y, TreeD.w, TreeD.h)
    pop()
}

//creates the values for a new Trees at a random location and size
function GrowTree() {
    let TreeD = {
        x: random(20, width - 20),
        y: random(20, height - 20),
        w: 10,
        h: 20
    }
    return TreeD;
}

//creates a Tree in the array and on screen at a random location chosen by GrowTree
function CreateForest() {
    let Tree = GrowTree()
    Trees.push(Tree)
}

//if the Room is set to forest and the max number of trees hasnt been met set newroom to 0, create a tree, and add 1 to currentTrees
function NewForest() {
    if (Room === 0 && CurrentTrees <= MaxTrees) {
        NewRoom = 0
        CurrentTrees++
        CreateForest()
    }
}

//when the user enters a new room delete all the trees and set current trees to 0
function RemoveTrees() {
    for (let TreeD of Trees) {
        if (NewRoom === 1 && CurrentTrees >= MaxTrees) {
            let index = Trees.indexOf(TreeD)
            Trees.splice(index, CurrentTrees)
            CurrentTrees = 0
            NewRoom = 0
        }
    }
}
//when the player enters a premade room remove all the trees in the array and make it so no new trees will spawn
function PermRemoveTrees() {
    for (let TreeD of Trees) {
        if (Room !== 0) {
            let index = Trees.indexOf(TreeD)
            Trees.splice(index, CurrentTrees)
            CurrentTrees = MaxTrees + 1
            NewRoom = 0
        }
    }
}

/*
                                              Non Random Rooms

*/
//if the user  goes through more rooms than the max number of rooms they enter the road and get run over
function RoadRoom() {
    if (Room === 1) {
        //constantly add 1 to TP so the teleport function will only happen once
        TP++
        //teleport player to specific location and constrain movement so they cant teleport away
        if (TP === 1) {
            push()
            P.X = 75
            P.Y = 450
            pop()
        }
        push()
        P.X = constrain(P.X, 10, 800)
        P.Y = constrain(P.Y, 10, 800)
        pop()

        //road
        push()
        noStroke()
        fill(255, 100, 255)
        rect(300, 0, 300, 900,)
        pop()

        //trees
        push()
        image(PlayerA, 100, 200, 50, 50)
        image(PlayerA, 800, 100, 50, 50)
        image(PlayerA, 700, 300, 50, 50)
        image(PlayerA, 150, 700, 50, 50)
        pop()

        //car
        if (P.X > 450) {
            push()
            image(PlayerA, Car.X, Car.Y += 15, 50, 50)
            pop()
        }
    }
}


/*
                                              Dialogue

*/

function LittleGuyDialogue() {
    if (Speaker === LittleGuy) {
        //sets the CurrentLine to the Little guys Dialohue controlled by the DialogueIndex and sets MakeLength to the length of the little guy text array
        CurrentLine = LittleGuyText[DialogueIndex]
        MaxLength = LittleGuyText.length
        //Charecter talking
        push()
        translate(220, 150)
        DrawLittleGuy()
        pop()
        //Dialogue Box
        push()
        rect(400, 450, 200, 100, 25)
        pop()
        //Dialogue
        push()
        textSize(DialogueSize)
        text(CurrentLine, 410, 470, 180)
        pop()
    }
}

//test
function BigLittleGuyDialogue() {
    if (Speaker === BigLittleGuy) {
        //sets the CurrentLine to the Little guys Dialohue controlled by the DialogueIndex and sets MakeLength to the length of the little guy text array
        CurrentLine = BigLittleGuyText[DialogueIndex]
        MaxLength = BigLittleGuyText.length
        //Charecter talking
        push()
        translate(220, 150)
        DrawLittleGuy()
        pop()
        //Dialogue Box
        push()
        rect(400, 450, 200, 100, 25)
        pop()
        //Dialogue
        push()
        textSize(DialogueSize)
        text(CurrentLine, 410, 470, 180)
        pop()
    }
}




function mousePressed() {
    //when the user is talking to someone let the mouse progress the dialogue
    if (Speaker !== Nobody) {
        DialogueIndex++
    }
    //when the user reaches the end of a charecters dialogue, remove the charceter and text and set DialogueIndex to 0
    if (DialogueIndex >= MaxLength) {
        Speaker = Nobody
        CurrentLine = 0
        DialogueIndex = 0
        MaxLength = Nobody
    }
    //lets the player click on items and NPCs
     let d = dist(mouseX, mouseY, SpawnL.X, SpawnL.Y)
            if (d < SpawnL.Size) {
            PickUp = true
}
}


/*
                                              Screens

*/

function TitleScreen() {
    //Title Screen
    if (Menu === 1) {
        push()
        textSize(50)
        textAlign(CENTER, CENTER)
        textFont(ITALIC)
        text("The Forest", 450, 40)
        pop()
        push()
        textSize(40)
        text("You Wake up alone in the middle of a cold dark forest with no idea how you got there.\n\n Try to find your way out before somthing else finds you", 10, 200, 900)
        pop()
    }
    //changes to actuall game
    if (keyIsDown(" ") === true && Menu === 1) {
        Menu = 0
    }
    //Run Over Ending
    if (Menu === 2) {
        push()
        textSize(50)
        textAlign(CENTER, CENTER)
        textFont(ITALIC)
        text("You Were Run Over", 450, 40)
        pop()
        push()
        textSize(40)
        text("You Where so close but forgot to check both sides before crosing the road", 10, 200, 900)
        pop()
    }
        //Bunker ending
        if (Menu === 3) {
        push()
        textSize(50)
        textAlign(CENTER, CENTER)
        textFont(ITALIC)
        text("You Found Somthing You Wern't Supposed To", 450, 40)
        pop()
        push()
        textSize(40)
        text("You Open the door but before you can see what's inside you were knocked, were you wake up next... I can't tell you", 10, 200, 900)
        pop()
    }
        //Escape Ending
        if (Menu === 4) {
        push()
        textSize(50)
        textAlign(CENTER, CENTER)
        textFont(ITALIC)
        text("You Finally Find The Way Out", 450, 40)
        pop()
        push()
        textSize(40)
        text("After thinking you'd never make it out of this hell you see a light at the end of the tunnel, you see a car in the distance and start trying to get their attention", 10, 200, 900)
        pop()
    }
}

//if the players follows a specific path they dont gain lost and gain RightWay if it reaches 8 they escape
function CorrectWay() {
    //Correct way is right Down, right, Up, Left, up, left, up
    if (P.X > width -1 && RightWay === 0) {
        Lost--
        RightWay = 1
    }
        if (P.Y > height -1 && RightWay === 1) {
        Lost--
        RightWay = 2
        }
            if (P.X > width -1 && RightWay === 2) {
            Lost--
            RightWay = 3
            }  
                if (P.Y < 5 && RightWay === 3) {
                Lost--
                RightWay = 4
                }
                    if (P.X < 5 && RightWay === 4) {
                    Lost--
                    RightWay = 5
                    }  
                        if (P.Y < 5 && RightWay === 5) {
                        Lost--
                        RightWay = 6
                        }
                            if (P.X < 5 && RightWay === 6) {
                            Lost--
                            RightWay = 7
                            }
                                if (P.Y < 5 && RightWay === 7) {
                                Lost--
                                RightWay = 8
                                }
if (RightWay === 8) {
    Room = 3
}
}

/*
                                              Charecters and Items

*/

//everytime the room changes has a random chance to spawn an item or NPC
function SpawnStuff() {
    //when room changes sets Spawn to a random number
    if (NewRoom === 1) {
       Spawn = floor(random(0, 30))
       SpawnL.X = random(50, 850)
       SpawnL.Y = random(50, 850)
    }
    //if  Spawn is between 5 and 8 spawn the first half of the note
    if (Spawn >= 5 && Spawn <= 8) {
        push()
        image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
        pop()
    }
        //if  Spawn is between 9 and 12 spawn the Second half of the note
        if (Spawn >= 9 && Spawn <= 12) {
            push()
            image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
            pop()
        }  
            //if  Spawn is between 13 and 16 spawn An NPC that hinds towards the bunker
            if (Spawn >= 13 && Spawn <= 16) {
                push()
                image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
                pop()
            }

                //if  Spawn is between 17 and 25 spawn An NPC that hinds towards the Letters
                if (Spawn >= 17 && Spawn <= 23) {
                    push()
                    image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
                    pop()
                }
                    //if  Spawn is between 24 and 26 spawn the key to the bunker
                    if (Spawn >= 24 && Spawn <= 26) {
                        push()
                        image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
                        pop()
                    }

                         //if  Spawn is between 24 and 26 spawn the bunker
                        if (Spawn >= 27 && Spawn <= 29) {
                            push()
                            image(PaperI, SpawnL.X, SpawnL.Y, 50, 50)
                            pop()
                        }
                            //if Spawn is 30 spawn Little Guy
                            if (Spawn === 30) {
                                push()
                                translate(SpawnL.X, SpawnL.Y)
                                DrawLittleGuy()
                                pop()
                            }
    
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