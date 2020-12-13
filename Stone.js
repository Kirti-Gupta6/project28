class Stone {
  constructor(x,y,width,height){
      var option ={
         isStatic : true,
         restitution : 0,
         friction : 1,
         density : 1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,option);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/stone.png")
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }

}