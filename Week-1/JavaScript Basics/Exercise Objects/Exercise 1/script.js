let p1 = {
    name: "Jill",
    age: 21,
    city: "Nablus"
}
let p2 = {
    name: "Robert",
    age: 21,
    city: "Nablus"
}
if ((p1.age == p2.age) && (p1.city == p2.city)) {
    console.log(p1.name + " wanted to date " + p2.name);
} else {
    console.log(p1.name + " wanted to date " + p2.name + " but couldnt")
}
