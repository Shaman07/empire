class Rope{
   constructor(bodyA,pointB){
   var options ={
   bodyA:bodyA,
   pointB:pointB,
   stiffness:2,
   length:200    
   }
   this.pointB = pointB;
   this.rope = constraint.create(options);
   World.add(world ,this.rope);
   } 
   display(){
    push();       
   line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    pop();
   }
}