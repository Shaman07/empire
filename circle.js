class bob  {
    constructor(x,y,radius){
     var options = {
      friction:1,
      restitution:1,
      density:1,
     } 
    this.body = Matter.Bodies.circle(x,y,radius);
    this.radius = radius;
    World.add(world ,this.body);
    }
    display(){
        
    var pos = this.body.position;
    fill("white");
    stroke("orange");
    strokeWeight(5);
    ellipse(pos.x,pos.y,50,50)    
    }
    }
