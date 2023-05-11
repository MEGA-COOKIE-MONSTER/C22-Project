
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground,leftGround,rightGround;
var ball;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 480,1000, 10);
	leftGround= new Ground(550, 435, 10, 80)
	rightGround= new Ground(700,435,10,80);


	ball = Bodies.circle(300,300,20,{restitution:1});
	World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	leftGround.display();
	rightGround.display();
	
	fill ("aqua")
	ellipse(ball.position.x, ball.position.y,20,20);
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 0.04, y:-0.02})
	}
}



