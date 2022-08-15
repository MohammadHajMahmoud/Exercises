function countChars(string) {
    let ans=''
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let nextChr = string[i+1]
        if(char === nextChr){
            count++;
        }else{
            ans = ans + char + count
            count =1
        }
    }
    return ans
}
console.log(countChars("aagcccbbbssa"))
