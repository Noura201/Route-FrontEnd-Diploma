// HOME_navbar_UL_LI_Link_onclick_Function
let HomeNavbarUL = document.querySelector(".HomeNavbarUL");
let HomeNavbarUL_Len = HomeNavbarUL.children.length;

for (let i = 0; i < HomeNavbarUL_Len; ++i) {
  let UL_LI_Link = HomeNavbarUL.children[i].firstElementChild;

  UL_LI_Link.onclick = function () {
    for (let j = 0; j < HomeNavbarUL_Len; ++j) {
      if (j === i) {
        UL_LI_Link.style.color = "#ae9768";
        UL_LI_Link.style.borderTop = "3px solid #ae9768";
      } else {
        HomeNavbarUL.children[j].firstElementChild.style.color = "#222";
        HomeNavbarUL.children[j].firstElementChild.style.border = "none";
      }
    }
  };

  // ============================================
  // TabletNavbarIcon_onclick_Function
  let TabletNavbarIcon = document.querySelector(".TabletNavbarIcon");
  document
    .getElementById("TabletNavbarIcon")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var TabletNavbarUL = document.getElementById("TabletNavbarUL");
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
    "ourLocation",
    "ourOffer",
    "gallery",
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

  let TabletNavbarUL = document.querySelector(".TabletNavbarUL");
  let TabletNavbarUL_Len = TabletNavbarUL.children.length;

  for (let i = 0; i < TabletNavbarUL_Len; ++i) {
    let UL_LI_Link = TabletNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < TabletNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.color = "#ae9768";
          UL_LI_Link.style.borderBottom = "3px solid #ae9768";
        } else {
          TabletNavbarUL.children[j].firstElementChild.style.color = "#000";
          TabletNavbarUL.children[j].firstElementChild.style.borderBottom =
            "transparent";
        }
      }
    };
  }
}
