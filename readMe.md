# Fisdom (Redesigning fintech)

This web page Redesigning-fintech-website, a design by <b>Design naz</b>. <br>
The resource is [Redesigning fintech websiteP](https://www.behance.net/gallery/122321575/Redesigning-fintech-website)

## Table of contents

- [Installation](#installation)
- [Overview](#overview)
  - [The task](#the-task)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Installation

To use the fisdom (redesigning fintech) website locally, follow these steps:

1. Clone the repository: git clone https://github.com/Hakizimana-Clement/Redesigning-fintech-website.git

2. Navigate to the project directory: cd Redesigning-fintech-website.

3. Type "npm install" in terminal.

4. Type "npm run dev"

5. Open browser and type "http://localhost:5173/"

## Overview

### The Task

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- On mobile screen size, the humbuge icon needs to be interactive.
- Make button, link to have hover state.

### Links

- Github repository URL: [Fisdom](https://github.com/Hakizimana-Clement/Redesigning-fintech-website)

- Live Site URL: [Fisdom](redesigning-fintech-website.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- javaScript
- vite as local server.

### What I learned

1. To use Vite as a local server, follow these steps:

- Install Vite globally using npm or yarn.

```bash
npm create vite@latest

```

- Create a new project folder and name project name.

- Select "vanilla" as the template and "javascript" as the language.

2. I learned how to use a CSS container for responsive design using only six (6) media queries.

```css
/* xs */
@media (min-width: 475px) {
}
/* sm */
@media (min-width: 640px) {
}
/* md */
@media (min-width: 768px) {
}
/* lg */
@media (min-width: 1024px) {
}
/* xl */
@media (min-width: 1280px) {
}

/* 2xl */
@media (min-width: 1536px) {
}
```

3. How to use the root element in HTML for creating reusable fonts, colors, or anything else.

```css
:root {
  --clr-background: #ffffff;
  --clr-background-dark: #f7f8fb;
  --clr-on-features-section: #5e5ac4;
  ...;
}
```

4. How to organize the project folder structure.

```bash
-index.html
-src
 - main.js
 - utils
   - dark-mode.js
   - mobile-nav.js
-styles
 - mordern-normalize.css
 - style.css
 - utils.css
 - components
   - choose-us.css
   - header.css
  ...
```

5.  How to create a mobile navigation bar.

```js
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

        document.body.style.overflowY = "auto";
      }
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
};

export default mobileNav;
```

6.How to create a dark mode and store it in local storage for remembering the user's choice.

```js
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
```

### Continued development

I’m working on:

- Refactoring my code.
- Learning more about how to create a navbar for mobile and how to make the dark mode work well.
- Understanding how local storage works and how to use it efficiently.

### Useful resources

- [Slaying the dragon](https://www.youtube.com/@slayingthedragon) - This YouTube channel helped me learn how to use Vite, how to use a CSS container for media queries, how to organize the folder structure, how to create a dark mode and a mobile nav.

## Challenges

While I was building this project, I faced the following challenges:

- Trusted section (trusted.css): I had two challenges in this section.
  a. I wanted to make this section have a width of 100%, but it was not working because the utils class had more priority than other styles and I'm still figuring out how to fix it.
  b. As the design looked like, it should have half part of color and then cards, but I didn't know how to do that.
- Customer section (customer.css): I wanted to have a width of 100%, but it was not working because the utils class had more priority than other styles and I'm still figuring out how to fix it.

## Author

- Github - [Hakizimana Clement](https://github.com/Hakizimana-Clement/)
- Twitter - [@HakizimanaClem5](https://www.twitter.com/HakizimanaClem5)
