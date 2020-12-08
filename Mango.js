class Mango{
 constructor(x,y){
  var mango_op={isStatic:true,restitution:0,friction:1}
  this.body=Bodies.circle(x,y,35,mango_op);
  this.radius=35;
  this.image=loadImage("mango.png");
  World.add(world,this.body);
 }
display(){
var pos =this.body.position;
push();
translate(pos.x,pos.y);
imageMode(RADIUS);
image(this.image,0,0,this.radius,this.radius);
pop();


}



}