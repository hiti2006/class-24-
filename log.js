class log{
    constructor (x,y,h,a)
    {
    this.wid=20
    this.hei=h
        this.box_1 = Bodies.rectangle(x,y,20,h,{density:1});
        Matter .Body.setAngle(this.box_1,a)
    World.add(world,this.box_1);

    }
    display(){
        push ()
        translate(this.box_1.position.x,this.box_1.position.y ) 
        fill ("yellow")
        rotate(this.box_1.angle)
        rectMode(CENTER);
        rect(0,0,this.wid,this.hei);pop () 

    }
}