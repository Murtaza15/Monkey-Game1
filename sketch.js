
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var bananaGroup,obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  var survivalTime=0;
}


function draw() {
  background("white");
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  spawnFood();
  spawnObstacle();
  
  monkey.collide(ground);
  
  if (keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12 
  }
  monkey.velocityY=monkey.velocityY+0.7
  

  drawSprites();
}

function spawnFood(){
  if (frameCount % 80 === 0){
    var banana=createSprite(120,300,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=5;
    banana.velocityX=-2;
    banana.lifetime=200;
    banana.scale=0.1;
     }
  
}

function spawnObstacle(){
  if(frameCount % 300===0){
    var obstacle=createSprite(100,315,20,20);
    obstacle.lifetime=200;
    obstacle.velocityX=-2;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
  }
}




