var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
block1=createSprite(100,580,120,30)
block1.shapeColor="green"
block2=createSprite(250,580,120,30)
block2.shapeColor="red"
block3=createSprite(400,580,120,30)
block3.shapeColor="blue"
block4=createSprite(550,580,120,30)
block4.shapeColor="yellow"

    //create box sprite and give velocity
    ball=createSprite(random(50,600),random(50,200),20,20)
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;


}


    function draw() {
        background(rgb(169,169,169));
        edges=createEdgeSprites();
        ball.bounceOff(edges);
    
        if(block1.isTouching(ball) && ball.bounceOff(block1)){
            ball.shapeColor = "green";
            music.play();
        }
    
        if(block2.isTouching(ball)){
            ball.shapeColor = "red"
            ball.velocityX = 0;
            ball.velocityY = 0;
            music.stop();
        }
    
        if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor = "blue"
        }
    
        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "yellow"
        }
    drawSprites();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    }
