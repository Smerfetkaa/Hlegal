
let btn = document.getElementById("headnav-m__burger");
let bg = document.getElementById("headnav-m__list-bg");
let nav = document.getElementById("headnav-m__list");
let btn2 = document.getElementById("close")


function onOpen() {
  btn.addEventListener ("click", () => {
    bg.style.height = "100vh";
    nav.style.height = "44vh";
  });
}

function onClose() {
  btn2.addEventListener ("click", () => {
    bg.style.height = "0vh";
    nav.style.height = "0vh";
  });
}
      
onOpen();
onClose();

