function findDuplicates(arr){
    let apperences = {};
    for(let i = 0; i<arr.length;i++){
        if(apperences[arr[i]]){
            console.log(`there is a  duplicate , ${arr[i]} already exists`)
        }else{
            apperences[arr[i]]=1;
        }
    }
}