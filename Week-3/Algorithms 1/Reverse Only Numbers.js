function reverseOnlyNumbers(arr) {
    let nums = []
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            nums.push(arr[i])
        }
    }
    let j = nums.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            ans.push(arr[i])
        } else {
            ans.push(nums[j])
            j--;
        }
    }
    return ans;
}

function reverseOnlyNumbers(arr) {
    l=0
    r=arr.length-1
    while(l<arr.length){
        if (typeof arr[l]!= 'number'){
            l++
        }
        if (typeof arr[r]!= 'number'){
            r--
        }
        if (typeof arr[l]== 'number'&&typeof arr[r]== 'number'){
            let temp = arr[l];
            arr[l]=arr[j]
            arr[j] = temp 
        }
        
    }
    return arr;
}