
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roofObj = new Roof(width/2, height/4, width/4, 20);

  bobDiameter = 40;
  posX = width/2;
  posY = height/4+500;

  bobObj1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
  bobObj2 = new Bob(posX - bobDiameter, posY, bobDiameter);
  bobObj3 = new Bob(posX, posY, bobDiameter);
  bobObj4 = new Bob(posX + bobDiameter, posY, bobDiameter);
  bobObj5 = new Bob(posX + bobDiameter*2, posY, bobDiameter);

	//Create the Bodies Here.
  
  var render = Render.create({
     element:document.Body, engine:engine,
     option:{
       width:1200, height:700, wireframes:false
     }
  })

  ropeObj1 = new Rope(bobObj1.body, roofObj.body, -bobDiameter*2, 0 );
  ropeObj2 = new Rope(bobObj2.body, roofObj.body, -bobDiameter*1, 0);
  ropeObj3 = new Rope(bobObj3.body, roofObj.body, 0, 0);
  ropeObj4 = new Rope(bobObj4.body, roofObj.body, bobDiameter*1, 0);
  ropeObj5 = new Rope(bobObj5.body, roofObj.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  roofObj.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW) {
    Matter.Body.applyForce(bobObj1.body, bobObj1.body.position, {x:-50, y:-45})
  }
}

