class Bob {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 1.9,
        friction: 1.9,
        density: 1.9
     }
     this.x =x;
     this.y=y;
     this.radius=radius;
     this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("pink");
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
};
