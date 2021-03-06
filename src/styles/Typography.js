import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
    ${
      "" /* @import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
    }

    @font-face {
        font-family: 'Beau Rivage', cursive;
    }

    html {
        font-family: "Playfair Display", "serif";
        color: var(--weddingGreen);
    }

    h1, h2, h3 {
        font-family: "Beau Rivage", cursive;
    }

    h1 {
      font-size: 32px;
    }

    p {
        font-size: 18px;
        font-weight: 500;
    }

`;

export default Typography;
