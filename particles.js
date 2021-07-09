class Particles{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 0,

            isStatic: false 

        } 
    this.r = 9;
    //this.y = 20;
    this.body = Bodies.circle(x, y, this.r, options);
    this.color = color(random (0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        // console.log(pos.x)
        // console.log(pos.y)
        // console.log(this.r)

        //push();
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(pos.x, pos.y, this.r);
        //pop();
    }
    

}