var canvas;
var music;
var b1,b2,b3,b4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    b1=createSprite(0,580,360,30);
    b1.shapeColor="blue";

    b2=createSprite(295,580,200,30);
    b2.shapeColor="red";

    b3=createSprite(515,580,200,30);
    b3.shapeColor="green";

    b4=createSprite(740,580,200,30);
    b4.shapeColor="yellow";
    
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="white"
    box.velocityX=3;
    box.velocityY=3;
    //create box sprite and give velocity

}

function draw() {
    background(0);
    //create edgeSprite
    edges=createEdgeSprites();
    drawSprites();
    box.bounceOff(edges);
     
    //add condition to check if box touching surface and make it box
    if(b1.isTouching(box ) && box.bounceOff(b1)){
        box.shapeColor="blue";
        music.play();
    }
    if(b2.isTouching(box ) && box.bounceOff(b2)){
        box.shapeColor="red";
    }

    if(b3.isTouching(box ) && box.bounceOff(b3)){
        box.shapeColor="green";
    }
    if(b4.isTouching(box)){
        box.shapeColor=rgb(255,128,0);
        ball.velocityX=0;
        music.stop();
    }

}
