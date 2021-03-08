const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var slingShot;

function setup(){
    var canvas = createCanvas(1000,800);
    background(0)

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(600,height,1200,20);




}

function draw(){
    ground.display()
}