function isEven(num){
    if(num%2==0){
        return true;
    }
    else
    {
        return false;
    }

}
isEven(4);

const numbers=[1,2,3,4,5]
function oddNumbersOfAnArray(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(!isEven(arr[i])){
            console.log(arr[i]);
        }
    }
}
oddNumbersOfAnArray(numbers);