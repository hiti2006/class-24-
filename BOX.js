class box1{
    constructor (x,y,w,h)
    {
    this.wid=w
    this.hei=h
        this.box_1 = Bodies.rectangle(x,y,w,h);
    World.add(world,this.box_1);

    }
    display(){
        push ()
        translate(this.box_1.position.x,this.box_1.position.y ) 
        fill ("brown")
        rotate(this.box_1.angle)
        rectMode(CENTER);
        rect(0,0,this.wid,this.hei);pop () 

    }
}