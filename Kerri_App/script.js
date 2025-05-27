window.onload = function () {
  // navbar_UL_LI_Link_onclick_Function
  let navbarUL = document.querySelector(".navbar-ul");
  let navbarUL_Len = navbarUL.children.length;

  for (let i = 0; i < navbarUL_Len; ++i) {
    let UL_LI_Link = navbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < navbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.transition = "0.3s linear";
          UL_LI_Link.style.color = "#e65f78";
        } else navbarUL.children[j].firstElementChild.style.color = "#000";
      }
    };
  }
  // ==========================================================
  // HomeButton_OnMouseOver|OnMouseLeave
  homeButton = document.querySelector(".homeButton");
  homeButtonLink = document.querySelector(".homeButtonLink");
  homeButton.onmouseover = function () {
    homeButton.style.transition = "1.2s ease";
    homeButtonLink.style.transition = "1.2s ease";
  };
  homeButton.onmouseleave = function () {
    homeButton.style.transition = "1.2s ease";
    homeButtonLink.style.transition = "1.2s ease";
  };
  // ============================================
  // TabletNavbarIcon_onclick_Function
  let TabletNavbarIcon = document.querySelector(".TabletNavbarIcon");
  let TabletNavbarUL = document.querySelector(".TabletNavbarUL");

  document
    .getElementById("TabletNavbarIcon")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (
        TabletNavbarUL.style.display === "none" ||
        TabletNavbarUL.style.display === ""
      ) {
        TabletNavbarUL.style.display = "block";
      } else {
        TabletNavbarUL.style.display = "none";
      }
      event.stopPropagation();
      document.addEventListener("click", function (event) {
        if (
          !TabletNavbarUL.contains(event.target) &&
          event.target !== TabletNavbarUL
        ) {
          TabletNavbarUL.style.display = "none";
        }
      });
    });

  // ============================================
  // Hide TabletNavbarUL When We Click Any Link Inside It
  linksId = [
    "home",
    "about",
    "services",
    "client",
    "portfolio",
    "blog",
    "contact",
  ];
  linksId.forEach((id) => {
    document.getElementById(id).addEventListener("click", function () {
      document.getElementById("TabletNavbarUL").style.display = "none";
    });
  });

  // ============================================
  // TabletNavbarUL_LI_Link_onclick_Function

  let TabletNavbarUL_Len = TabletNavbarUL.children.length;

  for (let i = 0; i < TabletNavbarUL_Len; ++i) {
    let UL_LI_Link = TabletNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < TabletNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.color = "#d8576f";
          UL_LI_Link.style.borderBottom = "3px solid #d8576f";
        } else {
          TabletNavbarUL.children[j].firstElementChild.style.color = "#000";
          TabletNavbarUL.children[j].firstElementChild.style.borderBottom =
            "transparent";
        }
      }
    };
  }
};
