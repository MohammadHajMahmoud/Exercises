const StringFormatter = function () {
    const capitalizeFirst = function(str){
       console.log(str.charAt(0).toUpperCase() +str.slice(1).toLowerCase()) 
    }
    const skewerCase = function(str){
       console.log(str.replace(' ', '-')) 
    }
    return{
        capitalizeFirst : capitalizeFirst,
        skewerCase : skewerCase
    }
}
    const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") 
formatter.skewerCase("blue box") 
    