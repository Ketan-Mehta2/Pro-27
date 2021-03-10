class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("pink");
        stroke(0);
        strokeWeight(3);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
