const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ground;
var cannon;

function setup(){
    var canvas = createCanvas(1600,400)
    background("white");
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,400,1600,20);
    
    cannon = new Tanker(150,350,50,50);
}

function draw(){
    Engine.update(engine);
    ground.display();
    cannon.display();
}