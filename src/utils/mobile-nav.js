const mobileNav = () => {
  // menu icon
  const headerBtn = document.querySelector(".header__bars");
  // mobile navigation class for mobile
  const mobileNav = document.querySelector(".mobile-nav");
  // Define the query
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // state
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";

      // Check if the media query is true
      if (mediaQuery.matches) {
        // Then trigger an alert
        mobileNav.style.display = "none";
      }
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
};

export default mobileNav;
