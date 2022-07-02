const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }
function boxInit() {
  for (let i = 0; i < 14; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", "box" + i);
    box.style.backgroundColor = getRandomColor();
    document.getElementById("container").appendChild(box);
  }
}
function changeColor() {
  for (let i = 0; i < 14; i++) {
    document.getElementById("box" + i).onmouseenter = function () {
      document.getElementById("box" + i).style.backgroundColor =
        getRandomColor();
    };
  }
}

function checkIfAllSame() {
  for (let i = 0; i < 14; i++) {
    document.getElementById("box" + i).onmouseleave = function () {
      for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 14; j++) {
          if (
            document.getElementById("box" + i).style.backgroundColor !=
            document.getElementById("box" + j).style.backgroundColor
          ) {
            return;
          }
        }
      }
      let allSame = document.createElement("h1");
      allSame.textContent = "Nice Job";
      document.getElementById("container").appendChild(allSame);
    };
  }
}

boxInit();
changeColor();
checkIfAllSame();
