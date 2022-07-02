const numbers = [1,2,3,4,5,6,7,8,9,10]
//console.log(numbers);
numbers.splice(1,2);
//console.log(numbers);
numbers.splice(3,1,1);
//console.log(numbers)
numbers.splice(numbers.length-4,4);
//console.log(numbers);
numbers.splice(0,0,0);
//final output
console.log(numbers);
