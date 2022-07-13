const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);
const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game By : Mohammad Haj-Mahmoud";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);
const playingField = document.getElementById("playing-field");
const ball = document.getElementById("ball");
let horizental = parseInt(ball.style.left) || 0;
let vertical = parseInt(ball.style.up) || 0;

right.onclick = function () {
  if (horizental > 400) {
    horizental += 0;
  } else {
    horizental += 35;
  }
  ball.style.left = horizental + "px";
};
left.onclick = function () {
  if (horizental == 0) {
    horizental -= 0;
  } else {
    horizental -= 35;
  }
  ball.style.left = horizental + "px";
};
up.onclick = function () {

  if (vertical == 0) {
    vertical += 0;
  } else {
    vertical -= 35;
  }
  ball.style.top = vertical + "px";
};
down.onclick = function () {
    if (vertical >350) {
        vertical += 0;
      } else {
        vertical += 35;
      }
  ball.style.top = vertical + "px";
};
document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
        if (horizental == 0) {
          horizental -= 0;
        } else {
          horizental -= 35;
        }
        ball.style.left = horizental + "px";
          break;
      case 38:
        if (vertical == 0) {
          vertical += 0;
        } else {
          vertical -= 35;
        }
        ball.style.top = vertical + "px";
          break;
      case 39:
        if (horizental > 400) {
          horizental += 0;
        } else {
          horizental += 35;
        }
        ball.style.left = horizental + "px";
          break;
      case 40:
        if (vertical >400) {
          vertical += 0;
        } else {
          vertical += 35;
        }
    ball.style.top = vertical + "px";
          break;
  }
});

function changeColor() {
  document.getElementById("playing-field").style.backgroundColor = "#8e44ad";
}
