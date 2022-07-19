class Animal{
    constructor(name,numOfLegs){
        this.name=name;
        this.numOfLegs=numOfLegs;
        this.children=[];
    }
    giveBirth(name){
        this.children.push(name);
    }
}
cat = new Animal("peko",4)
cat.giveBirth("Dolly")
console.log(cat.children) 