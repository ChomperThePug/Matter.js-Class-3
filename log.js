class log{
    constructor(x,y,width,angle){
    var options = {
    'restitution' : 0.1,
    'density' : 1.0,
     'friction': 1.0
    }
    this.body = Bodies.rectangle(x,y,width,10, options);
    this.width = width;
    this.height = 10;
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        let angle1 = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle1);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
};