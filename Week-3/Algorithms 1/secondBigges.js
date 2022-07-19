function secondBiggest(arr) {
    let maxNum = -9999
    let secondMaxNum = -9999
    for (let i = 0; i < arr.length; i++) {
        maxNum = Math.max(arr[i], maxNum)
    }
    arr.splice(arr.indexOf(maxNum))
    for (let i = 0; i < arr.length; i++) {
        secondMaxNum = Math.max(arr[i], secondMaxNum)
    }
    console.log(secondMaxNum)
    return secondMaxNum;
}
secondBiggest([1, 2, 3, 4])
