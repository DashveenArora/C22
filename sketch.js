const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower,cannon,cannonImg,towerImage,backgroundImg;
var angle;



function preload() {
  backgroundImg = loadImage("background.gif")
  towerImage = loadImage("tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={isStatic:true}
  ground = Bodies.rectangle(0,height-10,width*2,1,options)

 World.add(world,ground)
 var options={isStatic:true}
 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 cannon=new Cannon(180,110,130,100,angle)
}

function draw() {
  background(189);
 image(backgroundImg, 0,0,width,height)
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)

  push()
  imageMode(CENTER)
  image(towerImage,tower.position.x,tower.position.y,160,310)
  pop()
  cannon.display()
  
   
}
