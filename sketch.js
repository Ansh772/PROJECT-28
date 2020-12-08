
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
var tree,treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stone,launcher;
function preload()
{
treeImage=loadImage("tree.png");
boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(1000,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(600,290);
	mango2=new Mango(855,325);
	mango3=new Mango(670,260);
	mango4=new Mango(730,200);
	mango5=new Mango(710,320);
	mango6=new Mango(780,250);
	mango7=new Mango(825,170);
	mango8=new Mango(880,260);
	mango9=new Mango(940,220);
	mango10=new Mango(980,305);
	stone=new Stone(100,480);
	ground=new Ground(500,625);

	tree=createSprite(775,370);
	tree.addImage(treeImage);
    tree.scale=0.42;
	boy=createSprite(160,550);
	boy.addImage(boyImage);
	boy.scale=0.125;
	
	launcher = new Launcher(stone.body,{x:100, y:480});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  
  ground.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  launcher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}


function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
launcher.fly();

}
function keyPressed(){

	if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:80,y:480});
	launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;
var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false);

}
}






