var playerImg;
var alienImg;
var groundImg;
var bground ,alien,player;
var laser;
var laserGroup,alienGroup; 
function preload(){
playerImg=loadImage("images/spaceship.png")  
alienImg=loadImage("images/alien.png")
groundImg=loadImage("images/space.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bground=createSprite(displayWidth/2,displayHeight/2,400,50,1600)
  bground.addImage(groundImg);

  
  player=createSprite(displayWidth/2,displayHeight/2+300,30,30)
  player.addImage(playerImg);
  player.scale=0.3

  bground.velocityY=4; 
  alienGroup=new Group();
  laserGroup=new Group();
}

function draw() {
  background("blue");  
 
 if(bground.y>displayHeight){
 bground.y=displayHeight/2;
}

if(frameCount%150===0){
  alien=createSprite(Math.round(random(displayWidth)),displayHeight/2-450,50,50)  
  alien.addImage(alienImg)
  alien.scale=0.5
  alien.velocityY=4;
alienGroup.add(alien)
}
if(laserGroup.isTouching(alienGroup)){
laserGroup.destroyEach();
alienGroup.destroyEach();  
}


drawSprites();
}
function keyPressed(){
if(keyCode===RIGHT_ARROW){
  player.x= player.x+100;  
}  
if(keyCode===LEFT_ARROW){
 player.x=player.x-100; 
}
if(keyCode===32){
laser=createSprite(player.x,displayHeight-50,10,50)
laser.shapeColor="red";  
laser.velocityY=-6
laserGroup.add(laser);
}

}