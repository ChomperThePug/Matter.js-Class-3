class box{
    constructor(x,y,width,height){
    var options = {
    'restitution' : 0.1,
    'density' : 1.0,
     'friction': 1.0
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("white");
        fill("brown");
        //rect(pos.x, pos.y, this.width, this.height);
        rect(0, 0, this.width, this.height);
        pop();
    }
};