const mobileNav = () => {
  // menu icon
  const headerBtn = document.querySelector(".header__bars");
  // mobile navigation class for mobile
  const mobileNav = document.querySelector(".mobile-nav");

  // // all anchors
  // const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  // state
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  // THIS IS FOR LINKS
  // mobileLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     isMobileNavOpen = false;
  //     mobileNav.style.display = "none";
  //     document.body.style.overflowY = "auto";
  //   });
  // });
};

export default mobileNav;
