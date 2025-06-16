window.onload = function () {
  let barsDiv = document.querySelector(".bars-div");
  let navMenu = document.querySelector(".nav-menu");
  barsDiv.onclick = function () {
    navMenu.style.height = "100vh";
    if (navMenu.style.display === "none" || navMenu.style.display === "")
      navMenu.style.display = "block";
    else navMenu.style.display = "none";
  };
};
