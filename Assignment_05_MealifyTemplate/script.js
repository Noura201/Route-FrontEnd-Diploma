window.onload = function () {
  // Desktop_NAVBAR_UL_LI_Link_onclick_Function
  let HomeNavbarUL = document.querySelector("#DesktopUL");
  let HomeNavbarUL_Len = HomeNavbarUL.children.length;

  for (let i = 0; i < HomeNavbarUL_Len; ++i) {
    let UL_LI_Link = HomeNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < HomeNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.transition = "0.5s ease";
          UL_LI_Link.style.color = "#212529";
          UL_LI_Link.style.borderBottom = "2.5px solid #CE1212";
        } else {
          HomeNavbarUL.children[j].firstElementChild.style.border = "none";
          HomeNavbarUL.children[j].firstElementChild.style.color = "#7f7f90";
        }
      }
    };
  }
  // =========================================================================
  // Tablet_NAVBAR_UL_LI_Link_onclick_Function
  let TabletNavbarUL = document.querySelector("#TabletUL");
  let TabletNavbarUL_Len = TabletNavbarUL.children.length;

  for (let i = 1; i < TabletNavbarUL_Len; ++i) {
    let UL_LI_Link = TabletNavbarUL.children[i].firstElementChild;

    UL_LI_Link.onclick = function () {
      for (let j = 0; j < TabletNavbarUL_Len; ++j) {
        if (j === i) {
          UL_LI_Link.style.transition = "0.5s ease";
          UL_LI_Link.style.color = "#212529";
          UL_LI_Link.style.borderBottom = "2.5px solid #CE1212";
        } else {
          TabletNavbarUL.children[j].firstElementChild.style.border = "none";
          TabletNavbarUL.children[j].firstElementChild.style.color = "#7f7f90";
        }
      }
    };
  }
  // =========================================================================
  // Tablet_NAVBAR_UL_SHOW|HIDE
  let rightBar = document.querySelector("#rightBar");
  let TabletUL = document.querySelector("#TabletUL");
  let navbar = document.querySelector("#navbar");
  let body = document.querySelector("#body");

  rightBar.onclick = function () {
    TabletUL.style.transform = "translateX(0)";
    body.style.opacity = "0.6";
    navbar.style.backgroundColor = "#EEE";
  };

  // =========================================================================
  // XMARKSVG_ONCLICK_FUNCTION
  let XMarkSVG = document.getElementById("XMarkSVG");
  var list = document.getElementById("TabletUL");
  XMarkSVG.onclick = function () {
    list.style.transform = "translateX(500px)";
    body.style.opacity = "1";
    navbar.style.backgroundColor = "#FFF";
  };

  // =========================================================================
  // SWAP_BETWEEN_LIGHTMODE|DARKMODE
  // DARK-MODE
  /*
    let moonDiv=document.querySelector('#moonDiv');
    let darkDiv=document.querySelector('#darkDiv');
    let logoHeadLink=document.querySelector('.logoHeadLink');
    let pointDiv=document.querySelector('.pointDiv');
    let pointDiv2=document.querySelector('.pointDiv2');
    let homeLink1=document.querySelector('#homeLink1');
    let chefsLink1=document.querySelector('#chefsLink1');
    let galleryLink1=document.querySelector('#galleryLink1');
    let contactLink1=document.querySelector('#contactLink1');  
    let brdrDiv=document.querySelector('.brdrDiv');
    let brdrDiv2=document.querySelector('.brdrDiv2'); */

  /*
    moonDiv.onclick=function() {
        moonDiv.style.display="none";
        darkDiv.style.display="block";
        navbar.style.backgroundColor="#000";
        logoHeadLink.style.color="#FFF";
        pointDiv.style.backgroundColor="#C17E1F";
        pointDiv2.style.backgroundColor="#C17E1F";
    } */

  // LIGHT-MODE
  /*
    darkDiv.onclick=function() {
        darkDiv.style.display="none";
        moonDiv.style.display="block";
        navbar.style.backgroundColor="#FFF";
        logoHeadLink.style.color="#212529";
        pointDiv.style.backgroundColor="#CE1212";
        pointDiv2.style.backgroundColor="#CE1212";
    } */
};
