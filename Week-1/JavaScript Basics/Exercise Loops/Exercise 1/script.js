const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
//{"ashley",23},{donvoan,47}....

    for(let j=0;j<ages.length;j++){
        let obj={}
        obj.name=names[j];
        obj.age=ages[j];
       people.push(obj)
    }
console.log(people)