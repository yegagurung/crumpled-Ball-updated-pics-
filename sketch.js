
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(width/2,670,width,20)
	//Create the Bodies Here.
	ball=new Ball(200,450,60)
	box= new Box(1200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display();
  ball.display()
  box.display()
 
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-150 })
		
	}
}


