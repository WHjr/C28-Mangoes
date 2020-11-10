class Stone{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            density : 0.3
        }
        this.body = Bodies.circle(x,y,20,options)
        this.radius = 20
        World.add(world,this.body)
        this.image = loadImage("Images/stone.png")
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,40,40)
    }
}