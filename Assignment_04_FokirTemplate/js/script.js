window.onload = function () {
  // HOME_navbar_UL_LI_Link_onclick_Function
  let HomeNavbarUL = document.querySelector(".navbar-ul");
  let HomeNavbarUL_Len = HomeNavbarUL.children.length;

  for (let i = 0; i < HomeNavbarUL_Len; ++i) {
    let UL_LI_Link = HomeNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < HomeNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.transition = "0.5s ease";
          UL_LI_Link.style.color = "#ff305b";
        } else HomeNavbarUL.children[j].firstElementChild.style.color = "#FFF";
      }
    };
  }
  // ============================================
  // PORTFOLIO_navbar_UL_LI_Link_onclick_Function
  let PORTFOLIONavbarUL = document.querySelector(".navUL");
  let PORTFOLIONavbarUL_Len = PORTFOLIONavbarUL.children.length;

  for (let i = 0; i < PORTFOLIONavbarUL_Len; ++i) {
    let UL_LI = PORTFOLIONavbarUL.children[i].firstElementChild;

    UL_LI.onclick = function () {
      for (let j = 0; j < PORTFOLIONavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI.style.transition = "0.5s ease";
          UL_LI.style.color = "#ff305b";
        } else
          PORTFOLIONavbarUL.children[j].firstElementChild.style.color = "#333";
      }
    };
  }
  // ============================================
  // NAVBAR_rightBar_onclick_Function
  let rightBar = document.querySelector(".rightBar");
  document
    .getElementById("rightBar")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var tabletNavbarUL = document.getElementById("tablet-navbar-ul");
      if (
        tabletNavbarUL.style.display === "none" ||
        tabletNavbarUL.style.display === ""
      ) {
        tabletNavbarUL.style.display = "block";
      } else {
        tabletNavbarUL.style.display = "none";
      }
      event.stopPropagation();
      document.addEventListener("click", function (event) {
        if (
          !tabletNavbarUL.contains(event.target) &&
          event.target !== tabletNavbarUL
        ) {
          tabletNavbarUL.style.display = "none";
        }
      });
    });

  // ============================================
  // Hide tabletNavbarUL When We Click Any Link Inside It
  linksId = [
    "home",
    "about",
    "services",
    "portfolio",
    "testimonial",
    "blog",
    "contact",
  ];
  linksId.forEach((id) => {
    document.getElementById(id).addEventListener("click", function () {
      document.getElementById("tablet-navbar-ul").style.display = "none";
    });
  });

  // ============================================
  // tablet_navbar_UL_LI_Link_onclick_Function
  let tabletNavbarUL = document.getElementById("tablet-navbar-ul");
  let tabletNavbarUL_Len = tabletNavbarUL.children.length;

  for (let i = 0; i < tabletNavbarUL_Len; ++i) {
    let UL_LI_Link = tabletNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < tabletNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.transition = "0.5s ease";
          UL_LI_Link.style.color = "#ff305b";
        } else
          tabletNavbarUL.children[j].firstElementChild.style.color = "#FFF";
      }
    };
  }
};
