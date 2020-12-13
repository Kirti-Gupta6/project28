
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
function preload(){
		bgImg = loadImage("sprites/bg.jpg");
		boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 500);

	var options={
		isStatic : true
	}
	boy = createSprite(250,350,50,50,options);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	engine = Engine.create();
	world = engine.world;

	tree =  new Tree(850,250, 450,450);
	
	ground = new Ground(250,490,1800,20);

	stone = new Stone(250,350,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  tree.display();
  ground.display();
  stone.display();
  drawSprites();
 
}



