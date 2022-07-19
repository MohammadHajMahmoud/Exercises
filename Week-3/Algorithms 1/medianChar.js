var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};
function charMadian(text){
    return text[text.length/2-1]
}
console.log(charMadian(sortAlphabets("question")))