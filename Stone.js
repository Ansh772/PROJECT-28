class Stone{
  constructor(x,y){
   var stone_op={
    isStatic:false,
    restitution:0,
    density:1,
    friction:1
};
   this.body=Bodies.circle(x,y,30,stone_op);
   this.radius=30;
   this.image=loadImage("stone.png");
   World.add(world,this.body);

 }


  display(){
   
   push();
  
   imageMode(CENTER);
   image(this.image,this.body.position.x,this.body.position.y,30,30);
   pop();

}
}