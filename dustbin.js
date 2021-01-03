class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w= width;
        this.h = height;
        World.add(world,this.body);
        this.image = loadImage("dustbin.png");



    }
display(){

    var pos = this.body.position;

    imageMode(CENTER);
        image(this.image,620,350, this.width, this.height);
}





}