
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  String.prototype.camelCase=function(){
    let ans = ''
    words = this.split(' ')
    for(let i = 0 ;i<words.length;i++){
        if(i ==0 ){
            ans = words[i]
        }else{
            ans = ans + capitalizeFirstLetter(words[i])
        }
    }
    console.log(ans)
    return ans
}
console.log("among us potion went imposter sus".camelCase())