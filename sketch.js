var car ,wall;
var speed,weight










function setup() {

  createCanvas(800,400);
  
wall = createSprite(790, 200, 30, 230);
car = createSprite(40,200,20,20)

speed=random(20,20);
weight =random(400,1500);


}


function draw() {
  background("black");  
  car.velocityX=speed;
 
if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 *weight *speed*speed/22500;

if(deformation>180){
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}


}
 
 
  drawSprites();
}