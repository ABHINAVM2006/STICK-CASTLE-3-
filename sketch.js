const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1, rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13;


function setup() {
 var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world; 

  rect1 = new Rectangle(300,400,10,200);
  rect2 = new Rectangle(500,400,10,200);
  rect3 = new Rectangle(400,300,210,10);
  rect4 = new Rectangle(400,500,210,10);
  rect5 = new Rectangle(270,355,50,300);
  rect6 = new Rectangle(530,355,50,300);
  rect7 = new Rectangle(245,337,20,335);
  rect8 = new Rectangle(555,337,20,335);
  rect9 = new Rectangle(200,200,70,10);
  rect10 = new Rectangle(600,200,70,10);
  rect11 = new Rectangle(160,155,10,100);
  rect12 = new Rectangle(640,155,10,100);
  rect13 = new Rectangle(400,200,290,10);
  

}

function draw() {
  
  background(0);   
  triangle(225,170,570,170,395,75); 
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();
  rect10.display();
  rect11.display();
  rect12.display();
  rect13.display();
  Engine.update(engine);
  drawSprites();
 
}
