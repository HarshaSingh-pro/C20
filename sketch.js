  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  
  if (gameState === "play") {
     if(tower.y>400){
       tower.y=300
     }
    
    if(keyDown("left_arrow")) // write a code to move left when left arrow is pressed
    {
      ghost.x=ghost.x-3
    }
    if(keyDown("right_arrow"))// write a code to move left when right arrow is pressed
    {
      ghost.x=ghost.x+3
    }
    
    if(keyDown("space"))// write a code to move up when space arrow is pressed
    {
      ghost.velocityY=-5
    }
  
  ghost.velocityY = ghost.velocityY + 0.8
    

  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
  }

  if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
    ghost.destroy()
  }
     //write a condition for infinte scrolling tower
    
  
    //pawnDoors();
  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
  spawnClouds();
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    ghost.depth= door.depth
    ghost.depth= ghost.depth+1
     

    
    //assign lifetime to the obstacle           
    //obstacle.lifetime = 300;//change obstacle as door similarly add for climber and invisible block
     climber.lifetime=600
     door.lifetime=600
     invisibleBlock.lifetime=600
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);//chaange obstacles as door similarly add for climber and invisible block
    climbersGroup.add(climber);
    doorsGroup.add(door);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

