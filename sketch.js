//Global Variables
var Monkey, ground, fruitgroup, obstaclegroup, obstacleImage, bananaImage,  background;
var score = 0;
var backImage;

function preload() {
  backImage = loadImage("jungle.jpg");
 
  Player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

bananaImage = loadImage("Banana.png");
obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 300);
  
  background = createSprite(300,50,600,10);
  background.addImage(backImage);
  background.x = background.width /2;
  background.velocityX = -4;
  background.scale = 1.2;

  Monkey = createSprite(30,280,800,30);
  Monkey.addAnimation("running",Player_running);
  Monkey.scale = 0.1;
  
  ground = createSprite(300,295,600,10);
  ground.visible = false;
  
  obstaclegroup = new Group();
  fruitgroup = new Group();
  
  score = 0;
}

function draw() {  
  
  if (background.x < 0){
    background.x = background.width/2;
    }

    if (Monkey.isTouching(fruitgroup)) {
    fruitgroup.destroyEach();
    score = score + 1;
    }
  
    if (Monkey.isTouching(obstaclegroup)) {
    Monkey.scale = 0.1;
    }
  
  switch(score) {
    case 5: Monkey.scale = 0.2;
      break;
    case 10: Monkey.scale = 0.4;
      break;
    case 15: Monkey.scale = 0.6;
      break;
    case 20: Monkey.scale = 0.8;
      break;
    default: break;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8
  if (keyDown("space") && Monkey.y >= 240 && Monkey.scale === 0.1) {
  Monkey.velocityY = -10;
  }
  
    if (keyDown("space") && Monkey.y >= 200 && Monkey.scale === 0.2) {
  Monkey.velocityY = -16;
  }
  
  if (keyDown("space") && Monkey.y >= 140 && Monkey.scale === 0.4) {
  Monkey.velocityY = -18;
  }
  
    if (keyDown("space") && Monkey.y >= 100 && Monkey.scale === 0.6) {
  Monkey.velocityY = -20;
  }
  
  if (keyDown("space") && Monkey.y >= 50 && Monkey.scale === 0.8) {
    
  Monkey.velocityY = -24;
  }
  
  Monkey.collide(ground);
  
   fruit();
   obstacles(); 
   drawSprites();
  text("Score: " + score, 540,40);  
}

function fruit() {
  if (frameCount % 80 === 0) {
    var fruit = createSprite(300,1,200,10);
    fruit.y = Math.round(random(100,190));
    fruit.addImage(bananaImage);
    fruit.scale = 0.05;
    fruit.velocityX = -7;
    fruit.lifetime = 310;
    fruitgroup.add(fruit);   
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,270,40,30);
    obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -5;
     obstacle.lifetime = 310;
 obstaclegroup.add(obstacle);
  }
}