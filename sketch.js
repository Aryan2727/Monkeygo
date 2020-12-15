
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananas,obstacles
var gameoverimage,gameover

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameoverimage = loadImage("10.jpg")
 
}

function setup() {
  
  //to create monkey
   monkey = createSprite(100,300,10,10);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale = 0.12; 

  //to create ground
   ground = createSprite(200,340,600,10); 
   ground.velocityX = -3;
   ground.x = ground.width/2; 
   
}


function draw() {

  //to change background colour
  background("white");

  //scoring logic
  score = 0;
  text("Survival Time :" +Math.round(frameCount/20),250,50);  
  
  //to create moving ground
 if(ground.x<100){
   ground.x = ground.width/2; 
 }
 console.log(frameCount);
  
  obstacles();
  bananas();
  
  //to make the monkey jump
  if(keyDown("space") && monkey.y>280){
    monkey.velocityY = -14;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  //create groups
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();  
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  
  //to draw sprites
  drawSprites();
}

function obstacles(){
  if(frameCount % 200 === 0){
    obstacle = createSprite(500,310,20,20);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.lifetime = 400;
    obstaclesGroup.add(obstacle);
  }
}  
  
function bananas(){
  if(frameCount % 100 === 0){
    banana = createSprite(500,150,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -6;
    banana.lifetime = 400;
    bananaGroup.add(banana);
    
  }
}  




