let users = []

const getData = function (displayData) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        displayData()
        console.log("Got users")
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)