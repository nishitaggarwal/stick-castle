class Castle {

    constructor(x,y,width,height){

      
      
      
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height);
     
        World.add(world,this.body);
     //  this.body.velocityX = 220;
     // this.velocityX = random(-220, 250);
     //this.collide(ground)
      }

 display(){

 var pos = this.body.position
var angle = this.body.angle
push ()
translate (pos.x,pos.y)
angleMode(RADIANS)
rotate (angle)
 rectMode(CENTER);
 fill ("brown")
 rect(0,0,this.width,this.height);
pop ()


 }


}