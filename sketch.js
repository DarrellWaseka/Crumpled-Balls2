
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(400,height-100,800,20);
	box1 =  new Box(532,570,150,20)
	box2 = new Box(450,512,20,150)
	box3 = new Box(610,512,20,150)
	ball = new Ball(159, 581,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();

  text("x : "+mouseX+" y : "+mouseY,mouseX,mouseY)

  drawSprites();
 
}

function keyPressed() {
		if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-97});		

		}
	}


