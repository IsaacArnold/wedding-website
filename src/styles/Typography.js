import { createGlobalStyle } from "styled-components";
import Aurella from "../assets/fonts/Aurella.ttf";

const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @font-face {
        font-family: Aurella,
        src: url(${Aurella});
        font-display: swap;
    }

    html {
        font-family: "Playfair Display", "serif";
        color: var(--weddingGreen);
    }

    h1, h2, h3 {
        font-family: "Aurella", sans-serif;
    }

`;

export default Typography;
