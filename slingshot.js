class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        console.log("display:this.sling.bodyA="+this.sling.bodyA);
        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
        
       
    }

    fly() {
        console.log("fly:this.sling.bodyA="+this.sling.bodyA );
     this.sling.bodyA=null;

    }
    
}

