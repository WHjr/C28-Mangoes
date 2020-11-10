
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone;

var boyImage, treeImage;

function preload()
{
	boyImage = loadImage("Images/boy.png")
	treeImage = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,670,1000,30)
	stone = new Stone(150,500)
	sling = new Sling(stone.body,{x:160,y:540})
	mango1 = new Mango(750,260,20)
	mango2 = new Mango(730,300,15)
	mango3 = new Mango(650,310,13)
	mango4 = new Mango(770,320,25)
	mango5 = new Mango(710,260,22)
	mango6 = new Mango(620,360,18)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(140);
  imageMode(CENTER)
  
  ground.display();
  image(boyImage,200,600,130,250)
  image(treeImage,700,420,370,520)
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  hasCollided(stone,mango1)
  hasCollided(stone,mango2)
  hasCollided(stone,mango3)
  hasCollided(stone,mango4)
  hasCollided(stone,mango5)
  hasCollided(stone,mango6)


  drawSprites();
 
}

function mouseDragged(){
	Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}
function mouseReleased(){
	sling.fly();
}
function hasCollided(stone,mango){
	var stonePos = stone.body.position
	var mangoPos = mango.body.position
	 var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance <= (stone.radius + mango.radius)+10){
		Matter.Body.setStatic(mango.body,false)
	}

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:150,y:500});
		sling.attach(stone.body);
	}
}