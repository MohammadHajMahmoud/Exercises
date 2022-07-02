const name = document.getElementById("name")
const salary = document.getElementById("salary")
const birthday = document.getElementById("birthday")
const phone = document.getElementById("phone")
const error = document.getElementById("error")
function validate(){
    let nameLength = name.value.length;
    let phoneL = phone.value.length;
    if(!name.value){
        error.innerHTML = "name is missing"
    }
    else if(!salary.value){
        error.innerHTML = "desired salary is missing"
    }
    else if(!birthday.value){
        error.innerHTML = "birthday is missing"
    }
    else if(!phone.value){
        error.innerHTML = "phone is missing"
    }else if(nameLength<2){
        error.innerHTML = "name must be longer than 2 characters"
    }else if(salary.value<10000|| salary.value>16000){
        error.innerHTML = "Salary must be greater than 10,000 but less than 16,000"
    }else if(phoneL!=10){
        error.innerHTML = "Phone must be 10 digits long"
    }else{
        let welcome = document.createElement("h1");
        welcome.innerHTML = "Welcome  " + name.value;
        document.getElementById("container1").style.display="none";
        document.getElementById('container').style.display ="flex";
        document.getElementById('container').appendChild(welcome);
        document.getElementById('container').style.justifyContent="center";
        document.getElementById('container').style.height="fit-content";
    }
    }
