class Vehicle{
    constructor(x,y,speed){
        this.x=x;
        this.y=y;
        this.speed=speed;
        Vehicle.carsSold++;
        Vehicle.costs+=30000;
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        console.log("made "+Vehicle.costs+" dollars")
    }
    }
Vehicle.costs=0
Vehicle.carsSold = 0;
v1 = new Vehicle()
v2 = new Vehicle()
v3 = new Vehicle()
Vehicle.calculateMoney()
Vehicle.getInfo()

