function checkIfstringHasUniqueChars(string){
    let set = new Set()
    let caseSensitive = string.toLowerCase()
    for(let i = 0 ; i <caseSensitive.length;i++){
        if(set.has(caseSensitive[i])){
            return false
        }else{
            set.add(caseSensitive[i])
        }
    }
    return true;
}
console.log(checkIfstringHasUniqueChars("catT"))