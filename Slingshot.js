class SlingShot{
    constructor(bodyA, pointB){
        var options = {
             bodyA: bodyA,
                 pointB: pointB,
                     stiffness: 0.04,
                        length: 10
        }
                this.pointB = pointB
            this.sling = Constraint.create(options);
        World.add(world, this.sling);

         this.image1 = loadImage ("sprites/sling1.png")
             this.image2 = loadImage ("sprites/sling2.png")
                   this.image3 = loadImage ("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,25);
        image(this.image2,174,25)
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                    var pointB = this.pointB;
                            strokeWeight(4);
                                stroke("#301608")
                                line(pointA.x-15, pointA.y, pointB.x-20, pointB.y-2);
                                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+2);
                                image(this.image3,pointA.x-20,pointA.y);


        }
    }
    
}