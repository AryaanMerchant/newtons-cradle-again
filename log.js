class log {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,5,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      stroke("white");
      ellipse(pos.x, pos.y, 5, 5);
    }
  };