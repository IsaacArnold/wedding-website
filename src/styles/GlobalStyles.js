import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${
      "" /* @import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
    }

    @font-face {
        font-family: 'Beau Rivage', cursive;
    }

    @font-face {
        font-family: 'Playfair Display', serif;
    }

    :root {
        --weddingGreen: #2E4735;
        --offWhite: #F6F6F6;
    }

    * {
        font-family: "Playfair Display", "serif";
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        height: 100vh;
        background-color: var(--offWhite);
    }

    h1, h2, h3 {
        font-family: 'Beau Rivage', cursive;
    }

`;

export default GlobalStyles;
