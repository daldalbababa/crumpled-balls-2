
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(100,100,20,);
	b1 =new Dustbin(670,320,10,100)
	b2 =new Dustbin(720,350,100,10)
	b3 =new Dustbin(770,320,10,100)
	ground = new Ground(400,370,800,10);
	Engine.run(engine);
  
}

//function draw
function draw() {
  rectMode(CENTER);
  background("whith");
  ball.display();
  
  b1.display();
  b2.display();
  b3.display();
  ground.display();

  drawSprites();
 //sprite
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
	}
}

