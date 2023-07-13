
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao 
var block
var angulo = 60

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
chao = Bodies.rectangle(400,700,800,50,{isStatic:true});
World.add(world, chao);

block = Bodies.rectangle(400,450,200,50,{isStatic:true});
World.add(world, block);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  Engine.update(engine);

  rect(chao.position.x,chao.position.y,800,50);




Matter.Body.rotate(block,angulo)
push();
translate(block.position.x,block.position.y);
rotate(angulo);
rect(0,0,200,20);
pop();
angulo +=2.0;

  drawSprites();
 
}



