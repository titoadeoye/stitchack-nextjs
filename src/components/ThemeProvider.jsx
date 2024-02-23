"use client";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useMemo } from "react";
import { device } from "@/constants";

const GlobalStyle = createGlobalStyle`
:root {
    --primaryColor: #141414,
    --black: #000000;
    --white: #ffffff;
    --grey: #AFAFAF;
    --value: 10px;
    font-size: 62.5%;
    --background: #141414;
    --services: #141414;
    --reviews: #141414;
    --secondaryColor: linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%);
}

html{
    font-size: 1.6rem;
}

@media ${device.laptop}{
    html{
        font-size: 10px;
    }
}

/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin & padding */
* {
    margin: 0;
    padding: 0;
    letter-spacing: 1.25px;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
    list-style: none;
}

/* Set core root defaults */
html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    height: 100vh;
    text-rendering: optimizeSpeed;
}

/* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
    display: none;
}

* {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

#root {
    max-width: 100vw;
    margin-inline: auto;
    position: relative;
    height: 100vh;
    
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}


/*  */
/*  */
/* UTILITIES */
.flex-align-center {
    display: flex;
    align-items: center;
}

.flex-justify-between {
    display: flex;
    justify-content: space-between;
}

.mr-auto {
    margin-right: auto !important;
}

.ml-auto {
    margin-left: auto !important;
}

.mt-auto {
    margin-top: auto !important;
}

.mx-auto {
    margin-inline: auto !important;
}

.color-grey {
    color: var(--grey) !important;
}

.color-white {
    color: var(--white) !important;
}

.color-black {
    color: var(--black) !important;
}

.color-primary {
    color: var(--primary-color) !important;
}

.mb-1 {
    margin-bottom: var(--value);
}

.mb-2 {
    margin-bottom: calc(var(--value) * 2);
}

.ml-2 {
    margin-left: calc(var(--value) * 2);
}

svg.color-white:hover{
    cursor: pointer;
}

.d-none{
    display: none;
}

@supports (-webkit-appearance: none) or (-moz-appearance: none) {

    input[type="checkbox"],
    input[type="radio"] {
        accent-color: var(--primary-color);
    }

}
`;

export default function ({ children }) {
  const theme = useMemo(
    () => ({
      black: "#000000",
      white: "#fff",
      grey: "#AFAFAF",
      red: "#D32600",
      primaryColor: "#141414",
      background: "#141414",
      services: "#141414",
      text: "#FFFFFF",
      secondaryColor:
        "linear-gradient(139.52deg, #6251C3 -73.08%, #A800AB 150.16%)",

      // variables
      sideBarWidth: "250px"
    }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
