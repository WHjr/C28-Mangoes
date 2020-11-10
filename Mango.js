class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("Images/mango.png")
    }

    display(){
        var pos =this.body.position
        var angle = this.body.angle
        push();
        angleMode(RADIANS)
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("brown");
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}