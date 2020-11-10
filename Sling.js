class Sling{
    constructor(body1,point1){
        var options = {
            bodyA : body1,
            pointB : point1,
            stiffness : 0.04,
            length : 15
        }
        this.bodyA = body1
        this.pointB = point1;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.bodyA.position
            var posB = this.pointB
            
            stroke(255);
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}