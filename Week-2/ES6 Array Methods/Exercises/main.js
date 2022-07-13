//Exercise 1
const usersMap = users.map((u) => {
  return { email: u.email, companyName: u.company.name };
});
//Exercise 2
const usersFiltered = users.filter((u) => u.address.zipcode[0] == 5);
//Exercise 3
const usersIDs = usersFiltered.map((u) => u.id);
//Exercise 4
const namesStartWithC = users
  .filter((u) => u.name[0] === "C")
  .map((u) => u.name);
//Exercise 5
const ifAllLiveInSouthChristy = users.every(
  (u) => u.address.city === "South Christy"
);
//Exercise 6
const Apt950User = users.find((u) => u.address.suite === "Apt. 950");
console.log(Apt950User.company.name);
//Exercise7
const fun = function (user) {
  console.log(
    user.name +
      " Lives in " +
      user.address.city +
      " and owns the company " +
      user.company.name
  );
};
users.forEach((u) => fun(u));
