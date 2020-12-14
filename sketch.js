
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	boyImage=loadImage("boy.png");
	stoneImage=loadImage("stone.png");
	treeImage=loadImage("tree.png");
	
	
}


function setup() {
	createCanvas(1700, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(800,880,1700,20)

	stone = new Stone(200,700,50);
	mango1= new Mango(900,400,50);
	mango2= new Mango(1100,350,50);
	mango3= new Mango(1000,400,70);
	mango4= new Mango(950,320,70);
	mango5= new Mango(1200,400,50);


	slingshot = new SlingShot(stone.body,{x:130 ,y:700})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  image(boyImage,100,600,200,350);
  image(treeImage,800,200,500,700)

  stone.display();
  slingshot.display();
  
ground.display()

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ///mango6.display();

  detect(stone,mango1);
  detect(stone,mango2);
  detect(stone,mango3);
  detect(stone,mango4);
  detect(stone,mango5);
  //detect(stone,mango6);
}

function detect(stone,mango){
	mangoBodyPosition= mango.body.position;
	stoneBodyPosition= stone.body.position;

	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body, false)
	}

	
}





function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


// function keyPressed(){
//     if(keyCode===32 ){

//         slingshot.attach(bird.body);

//     }
// }






