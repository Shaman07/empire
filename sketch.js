
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint
var ground1;
var ball1,rope1,ball2,ball3,ball4,ball5,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(600,600,1150,10);
	
	ball1 = new bob(500,600,50);
  rope1 = new Rope(ball1.body,{x: 500, y: 200});
  ball2 = new bob(600,600,50);
  rope2 = new Rope(ball2.body,{x: 600,y: 200});
  ball3 = new bob(700,600,50);
  rope3 = new Rope(ball3.body,{x: 700,y:200});
  ball4 = new bob(800,600,50);
  rope4 = new Rope(ball4.body,{x: 800,y:200});
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
 
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  ball4.display();
  rope3.display();
  rope4.display();
  //drawSprites();
 
}
function mouseDragged() {
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});  
}

function mouseRelease() {
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:mouseX,y:mouseY});  
}
