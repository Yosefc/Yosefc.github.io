function toggleSideMenu() {
  var sideNav = document.getElementById("side-nav");
  var sideNavLinks = document.getElementById("links");
  if (sideNav.classList.contains("open")) {
    sideNav.classList.remove("open");
    sideNavLinks.style.display = "none";
  } else {
    sideNav.classList.add("open");
    sideNavLinks.style.display = "flex";
  }
}
