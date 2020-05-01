
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var stick1,stick2,stick3,stick4,ground;  
//var bigStick;

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

ground = createSprite(600,380,600,20)
 stick1 = new Castle (30,270,25,500);

 stick2 = new Castle (54,300,25,400);

 stick3 = new Castle (78,300,25,400);

 stick4 = new Castle (102,300,25,400);
 stick5 = new Castle (126,300,25,400);

 stick6 = new Castle (150,300,25,400);
 stick7 = new Castle (174,300,25,400); 
 stick8 = new Castle (198,300,25,400);
 stick9 = new Castle (221,300,25,400);
 
 stick10 = new Castle (245,300,25,400);


 stick11 = new Castle (269,300,25,400);
 stick12 = new Castle (284,300,25,400);

 stick13  = new Castle (308,300,25,400);
 stick14 = new Castle (332,300,25,400); 
 stick15 = new Castle (356,300,25,400);
 stick16 = new Castle (380,300,25,400);
 
 stick17 = new Castle (404,300,25,400);


 stick18 = new Castle (428,300,25,400);
 stick19 = new Castle (452,300,25,400);

 stick20 = new Castle (476,300,25,400);
 stick21 = new Castle (500,300,25,400); 
 stick22 = new Castle (524,300,25,400);
 stick23 = new Castle (548,300,25,400);
 
 stick24 = new Castle (572,300,25,400);




 stick25 = new Castle (596,300,25,400);
 stick26 = new Castle (695,300,25,400); 
stick27 = new Castle (719,300,25,400);
stick28 = new Castle (743,300,25,400);
 
stick29 = new Castle (767,300,25,400);


 stick30 = new Castle (791,300,25,400);
stick31 = new Castle (815,300,25,400);

 stick32 = new Castle (839,300,25,400);
 stick33 = new Castle (863,300,25,400); 
 stick34 = new Castle (887,300,25,400);
 stick35 = new Castle (911,300,25,400);
 
 stick36 = new Castle (935,300,25,400);
 stick37 = new Castle (959,300,25,400);
 stick38 = new Castle (983,300,25,400);
 stick39 = new Castle (1007,300,25,400);

 
 bigStick = new Castle (597,295,102,500)
 stick40 = new Castle (1034,270,25,500);



}

function draw() {
  background("yellow");  
  
Engine.update(engine);
   

bigStick.display();
 stick1.display();
 stick2.display();
 stick3.display();
 stick4.display();

 stick5.display();
 stick5.display();
 stick6.display();
 stick7.display();
 stick8.display();
 stick9.display();
 stick10.display();


 stick11.display();
 stick12.display();
 stick13.display();
 stick14.display();

 stick15.display();

 stick16.display();
 stick17.display();
 stick18.display();
 stick19.display();
 stick20.display();
 stick21.display();
 stick22.display();
 stick23.display();
 stick24.display();
 stick26.display();
 stick28.display();
 stick29.display();
 stick30.display();
 stick32.display();
 stick31.display();
 stick33.display();
 stick34.display();
 stick35.display();
 stick36.display();
 stick37.display();
 stick38.display();
 stick39.display();
 stick27.display();
 stick40.display();
 
 DrawSprites();

}