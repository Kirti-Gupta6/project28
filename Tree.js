class Tree{
    constructor(x,y,width, height){
        var options={
            isStatic : true
        }
        this.tree = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.tree)
        this.image = loadImage("sprites/tree.png")
    }
    display(){
        var angle = this.tree.angle;
        var pos = this.tree.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}