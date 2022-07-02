    //for the second text case ,
    //pretty sure yearOfTeslaPurchase is equal to 0 if he didnt buy a car 
    //so i locked the case with chekcing if it exists
    let boughtTesla = true
    const yearOfTeslaPurchase = 2014
    let isUSCitizen = true
    let currentYear = 2018
if(boughtTesla&&isUSCitizen){
    console.log("you bought your Tesla in :" + yearOfTeslaPurchase)
}
if(yearOfTeslaPurchase){
    if((currentYear-yearOfTeslaPurchase)>=4){
        console.log("Would you Like an upgrade?")
        }else{
            console.log("are you satisfied with your car")
        }
}
if(!isUSCitizen){
    console.log("Would you like to move to the US?")
}
if(!boughtTesla){
    console.log("are you intersted in buying a Tesla?")
}