function family(){
    let members=[]
    function birth (name){
        members.push(name);
        console.log(members);
    }
    return birth;
    
}
const giveBirth =  family()
giveBirth("sami");
 giveBirth("saed");