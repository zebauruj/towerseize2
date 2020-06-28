const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
  img=loadImage("image/poly.png")
}
function setup() {
  createCanvas(1600,900);
  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(1200,580,200,10);
  ground2=new Ground(800,780,350,10);
  ground3=new Ground(800,890,1600,10);
  //smaller ground
  b1=new Box(1230,540);
  b2=new Box(1260,540);
  b3=new Box(1200,540);
  b4=new Box(1170,540);
  b5=new Box(1140,540);
  b6=new Box(1170,500);
  b7=new Box(1200,500);
  b8=new Box(1230,500);
  b9=new Box(1200,460);
  //bigger ground
  b10=new Box(720,740);
  b11=new Box(750,740);
  b12=new Box(780,740);
  b13=new Box(810,740);
  b14=new Box(840,740);
  b15=new Box(870,740);
  b16=new Box(900,740);
  b17=new Box(750,700);
  b18=new Box(780,700);
  b19=new Box(810,700);
  b20=new Box(840,700);
  b21=new Box(870,700);
  b22=new Box(780,660);
  b23=new Box(810,660);
  b24=new Box(840,660);
  b25=new Box(810,620);
  //polygon body
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
sling=new Slingshot(this.polygon,{x:200,y:400});
}

function draw() {
  background(255);  
  Engine.update(engine);
  textSize(20);
  fill("lime");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
ground1.display();
ground2.display();
ground3.display();
//smaller ground
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
//bigger ground
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b22.display();
b23.display();
b24.display();
b25.display();
b21.display();
imageMode(CENTER);
image(img,polygon.position.x,polygon.position.y,40,40);
sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.polygon);
  }
}