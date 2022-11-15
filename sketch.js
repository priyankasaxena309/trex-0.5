
var trex ,trex_running;
function preload(){   //load images/sounds/animations
  
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,20);
 trex.addAnimation("running", trex_running)
}

function draw(){
  background("white");

  if(keyDown("space"))
  {
    trex.velocityY = -10;
  }
//gravity             -10        +1 = -9+1 = -8+1= -7......-1+1 = 0+1 = 1+1 = 2
  trex.velocityY = trex.velocityY + 1;

  drawSprites();
  

}
