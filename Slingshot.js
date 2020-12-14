class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 1
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;

    }

    display(){

        if(this.sling.bodyA){
            var A = this.sling.bodyA.position;
            var B = this.pointB
            strokeWeight(4);
            stroke("white")
            line(A.x, A.y, B.x, B.y);
        }
    }
    
}