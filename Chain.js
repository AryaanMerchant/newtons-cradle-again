class Chain{
    constructor(bodyA, bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},               
            //stiffness: 0.04,
            length: 200
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke("white");
        strokeWeight(1);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}