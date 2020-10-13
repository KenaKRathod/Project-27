class Bob {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':1,
          'friction' : 0,
          'frictionAir': 0.005,
          'slop': 1,
          'inertia' : Infinity
            
      }
      this.radius  = 20;
      this.body = Bodies.circle(x, y,this.radius, options);
      
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      ellipseMode(RADIUS);
      
      ellipse(0,0, this.radius,this.radius);
      pop();
     
      
    }
  }
