class pig{
    constructor (x,y)
    {
    this.wid=30
    this.hei=30
        this.box_1 = Bodies.rectangle(x,y,30,30);
    World.add(world,this.box_1);

    }
    display(){
        push ()
        translate(this.box_1.position.x,this.box_1.position.y ) 
        fill ("purple")
        rotate(this.box_1.angle)
        rectMode(CENTER);
        rect(0,0,this.wid,this.hei);pop () 

    }
}