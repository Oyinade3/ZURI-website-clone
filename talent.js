function openModal() {
  let modal = document.querySelector("#modal");

  modal.style.display = "block";

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function openModal2() {
  let modal2 = document.querySelector("#modal2");

  modal2.style.display = "block";

  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
}
