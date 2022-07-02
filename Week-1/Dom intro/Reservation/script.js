const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
function checkReservation() {
  let x = document.getElementById("reservation").value;
  if (x in reservations) {
    if (!reservations[x].claimed) {
      document.getElementById("message").innerHTML ="Welcome, " + x;
    } else{
        document.getElementById("message").innerHTML="Hmm, someone already claimed this reservation ";
    }
  }else{
     document.getElementById("message").innerHTML="You have no reservation ";
  }
}
console.log();
