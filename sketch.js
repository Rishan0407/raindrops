const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var  rains=[]

var symbol

function setup() {
  createCanvas(1200,760);
  engine= Engine.create();
  world=engine.world;
 
 

  /*for(i=0;i<26;i++)
  {
    symbol="B"
    raindrop[i]=new RainDrops(symbol)
    console.log(symbol)
  } */
for(i=0;i<500;i++)
{
  
 
  rains[i]=new RainDrops();
}

  
}

function draw() {
  background("yellow");  

  Engine.update(engine)

  
  for(i=0;i<rains.length;i++)
  {
    rains[i].display();
    rains[i].fall();
  }
  

  
 // raindrop.display()
 // drawSprites();
}

