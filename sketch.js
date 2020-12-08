const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground123=new GROUND (200,350,400,45)
    box =new box1(150,300,40,40)
    box2= new box1 (250,300,40,40) 
    pig1=new pig(200,300)
    log1=new log(200,200,200,PI/2)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground123. display()
    box.display()
    box2.display() 
    pig1.display() 
    log1.display()

   
   
}