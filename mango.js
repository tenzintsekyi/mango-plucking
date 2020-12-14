class Mango {
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.image = loadImage("mango.png");


        this.r=r;

        this.body= Bodies.circle(x,y,r,options)
        World.add(world, this.body)
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        //fill("white")

        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop ();
    }
}