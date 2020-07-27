var bullet,wall;
var  speed,thickness,weight;
 
 function setup() {
  createCanvas(1600,400);
  bullet=createSprite(300, 200, 10, 25);
  bullet.shapeColor="white";

  var wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
  speed=ramdom(223,321);
  weight=ramdom(30,52);

}

function draw() {
  background(0);  

  collide();
  if(collide(bullet,wall))v{
    var  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness){
     
  
      if(damage>10)
     { wall.shapeColor=color(255,0,0);
  
    } if(damage<10)
    {  wall.shapeColor=color(0,255,0);
  
    }
    }
  
  
  
  }


  drawSprites();
}

