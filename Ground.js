class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(128,128,128);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
