import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: ${props => props.theme.colors["gray-100"]} transparent;
        scrollbar-arrow-color: ${props => props.theme.colors["gray-100"]};
    }

    body {
        background: ${props => props.theme.colors["gray-900"]};
        width: 100%;
    }

    button, a {
        cursor: pointer;
        color: ${props => props.theme.colors["gray-100"]};
        font-family: ${props => props.theme.fonts.robotoCondensed};
        text-decoration: none;
    }

    h1, h2, h3, span, p {
        color: ${props => props.theme.colors["gray-100"]};
        font-family: ${props => props.theme.fonts.inter};
    }

    *::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors["gray-100"]};
    }
`;