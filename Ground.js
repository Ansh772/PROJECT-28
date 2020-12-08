class Ground{
    constructor(x,y){
     var ground_op={isStatic:true,restitution:0,density:1.2,friction:1};
     this.body=Bodies.rectangle(x,y,1200,20,ground_op);
     this.width=1200;
     this.height=20;
     World.add(world,this.body);
  
   }
  
  
    display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     pop();
  
  }
  }