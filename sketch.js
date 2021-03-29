const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var block1, block2 ,block3, block4;

var ground1;

var pig1, pig2;

var log1, log2, log3, log4;

var bird1;


function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    block1 = new box(700,320,70,70);
    block2 = new box(920,320,70,70);
    block3 = new box(700,240,70,70);
    block4 = new box(920,240,70,70);
    ground1 = new Ground(width/2, height - 20, width + 50, 100)
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);
    log1 = new log(810,260, 300, PI/2);
    log2 = new log(810,180, 300, PI/2);
    log3 = new log(760,120, 150, PI/7);
    log4 = new log(870,120, 150, -PI/7);
    bird1 = new bird(100,100,30,30)
}

function draw() {
    background(0);
    Engine.update(engine);
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}