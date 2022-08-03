var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/solarSystems', { useNewUrlParser: true })

const SolarSystemSchema = new Schema({
    starName: String,
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
    })

const SolarSystem = mongoose.model('SolarSystem', SolarSystemSchema)

const PlanetSchema  = new Schema({
    name: String,   
    system :{type: Schema.Types.ObjectId, ref: "SolarSystem"} ,
    visitors:[{type: Schema.Types.ObjectId, ref: 'Visitor'}]}
    )

const Planet = mongoose.model('Planet', PlanetSchema)

const VisitorSchema  = new Schema({
    name : String,
    homePlanet:{type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})
    const Visitor= mongoose.model('Visitor', VisitorSchema)
let s1 = new SolarSystem({starName : "Odin Planitia",planets:[]})
let s2=new SolarSystem({starName : "Baba-Jaga",planets:[]})
let p1 = new Planet({name : "Krypton",s1,visitors:[]})
let p2 = new Planet({name : "Earth",s1,visitors:[]})
let p3= new Planet({name : "RANN",s1,visitors:[]})
let p4 = new Planet({name : "CZARNIA",s2,visitors:[]})
let p5 = new Planet({name : "MOGO",s2,visitors:[]})
let p6= new Planet({name : "jojo" ,s2,visitors:[]})
let v1 = new Visitor({name : "mohammad",homePlanet :p1, visitedPlanets:[]})
let v2 = new Visitor({name : "saed",homePlanet :p4,visitedPlanets:[]})
// s1.planets.push(p1)
// s1.planets.push(p2)
// s1.planets.push(p3)
// s2.planets.push(p4)
// s2.planets.push(p5)
// s2.planets.push(p6)
// v1.visitedPlanets.push(p2)
// v1.visitedPlanets.push(p3)
// v2.visitedPlanets.push(p5)
// v2.visitedPlanets.push(p6)
// p1.visitors.push(v1)
// p4.visitors.push(v2)
// s1.save()
// s2.save()
// p1.save()
// p2.save()
// p3.save()
// p4.save()
// p5.save()
// p6.save()
// v1.save()
// v2.save()

Visitor.find({}).populate("visitedPlanets").exec(function(err,visitors){
    for(let visitor of visitors ){
       // console.log(visitor.visitedPlanets)
    }
})

Planet.find({}).populate("visitors").exec(function(err,planets){
    for(let planet of planets){
      //console.log(planet.visitors)
    }
})
SolarSystem.find({}).populate("visitors").exec(function(err,solarSys){
    
})





