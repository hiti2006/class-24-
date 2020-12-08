class GROUND{
    constructor (x,y,w,h)
    {
    this.wid=w
    this.hei=h
        this.box_1 = Bodies.rectangle(x,y,w,h,{isStatic:true});
    World.add(world,this.box_1);

    }
    display(){
        rectMode(CENTER);
        fill ("green")
        rect(this.box_1.position.x,this.box_1.position.y,this.wid,this.hei);
        

    }
}