function add(x,y) {
    if(!y){
        return function(y) {
            return x + y;
        }
    } else {
        return x+y
    }
}
console.log(add(2, 5));
console.log( add(2)(5)) 