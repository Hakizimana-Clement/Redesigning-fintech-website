const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // state
  const theme = localStorage.getItem("theme");

  // On mount (something happen when the page finishes its inital load)
  theme && document.body.classList.add(theme);

  // Handlers
  const handlerThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    // For local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };
  // events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handlerThemeToggle)
  );
};
export default darkMode;
