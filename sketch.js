const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box , box2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

   box = new Box(200,200,50,50);
   ground = new Ground(400,380,800,10);
   box2 = new Box(200,100,50,50);
  

}

function draw() {
  background(0); 

  Engine.update(engine);
  
  box.display();
  ground.display();
  box2.display();

  drawSprites();
}