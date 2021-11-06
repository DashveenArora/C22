class Cannon{

    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.Cannon_img=loadImage("canon.png")
        this.Cannon_base=loadImage("cannonBase.png")

    }
    display(){
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.Cannon_img,0,0,this.width,this.height);
        pop()
        image(this.Cannon_base,70,20,200,200)
    }
}