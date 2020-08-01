
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobject=new Ground(width/2,600,width,20);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(230);
  groundobject.display();
  drawSprites();
 
}



