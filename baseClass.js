class BaseClass {
    constructor(x,y,width,height){
        var options={
            //'isStatic':true,
            'restitution':0.2,
            'density':0.1,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }   

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}