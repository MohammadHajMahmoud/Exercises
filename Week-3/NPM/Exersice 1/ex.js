var validator = require('validator');
//Ex1
console.log(validator.isEmail('shoobert@dylan'));
//Ex2
console.log(validator.isMobilePhone('786-329-9958'))
//Ex3
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist))
/////////////////
var faker = require('faker');
function createHuman(){
console.log(
   faker.internet.userName()+''
    +faker.image.avatar()+''+
     faker.company.companyName()	
)
}
function makeHuman(numberOfHumans){
    for (let i = 0; i < numberOfHumans; i++) {
        createHuman()
    }
}
makeHuman(2)

