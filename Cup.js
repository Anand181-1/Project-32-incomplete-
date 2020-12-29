class Cup{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("cup.jpg");
        this.x = x;
        this.y = y;

        World.add(world,this.image)
    }
    display() {
//     Have to add pics but its showing that display function is not defined. 
       image(this.image, this.x, this.y, 100, 100);
    }
}