function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
let x = {a: "b", a2: ["first", "second"]};
let y = {b: 1, b3: ["firtsY", x]};
let z = deepClone(y);
console.log(z)