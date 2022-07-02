function checkExists(arr,num){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]==num){
        //    console.log("true")
            return true;
          
        }
        
    }
  //  console.log("false")
        return false
}
let arr = [1,2,3,5,8];
checkExists(arr,4)