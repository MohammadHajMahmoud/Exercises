function followedNumbers(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] - arr[j] == 1 || arr[i] - arr[j] == -1) {
                ans.push(arr[i])
            }
        }
    }
    return ans
}
