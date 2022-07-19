function duplicate(arr) {
    let ans = []
    let loopCounter = 0;
    while (loopCounter < 2) {
        for (let i = 0; i < arr.length; i++) {
            ans.push(arr[i])
        }
        loopCounter++;
    }
    console.log(ans)
    return ans
}
duplicate([1, 2, 3])
