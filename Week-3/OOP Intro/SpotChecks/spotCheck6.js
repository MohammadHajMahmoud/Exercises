class Vehicle{
    constructor(x,y,speed,fuel){
        this.x=x;
        this.y=y;
        this.speed=speed;
        this._fuel=fuel;
        Vehicle.carsSold++;
        Vehicle.costs+=30000;
    }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        console.log("made "+Vehicle.costs+" dollars")
    }
    get fuel(){
        return this._fuel;
    }
    set fuel(fuelAmount){
        if(fuelAmount > 0 &&fuelAmount<150){
            this._fuel=fuelAmount;
        }else
        console.log("not valid amount")

    }
    }
Vehicle.costs=0
Vehicle.carsSold = 0;
v1 = new Vehicle()
v2 = new Vehicle()
v3 = new Vehicle()
Vehicle.calculateMoney()
Vehicle.getInfo()
v1.fuel = 160
v1.fuel

