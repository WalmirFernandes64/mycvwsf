import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif; /* Fonte principal */
    }

    body {
        background-color: #4a4a4a; /* Fundo principal: Branco */
        color: #333333; /* Texto predominante: Cinza Escuro */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lato', sans-serif; /* Fonte de destaque para títulos */
        color: #000080; /* Cor de títulos: Azul Marinho */
    }

    a {
        color: #00BCD4; /* Cor de links: Azul Ciano */
        text-decoration: none;

        &:hover {
            color: #008BA3; /* Hover mais escuro para links */
        }
    }

    @media (min-width: 1440px) {
        .corpoPagina {
            max-width: 1200px; /* Largura máxima para desktop */
            margin: auto; /* Centraliza */
            padding: 20px;
        }
    
        .header {
            flex-direction: row;
        }
    
        .fotoPerfil {
            max-width: 200px;
        }
    
        .header h1, .header p {
            font-size: larger;
        }
    }
    
    @media (max-width: 375px) {
        .corpoPagina {
            padding: 10px;
        }
    
        .header {
            flex-direction: column;
        }
    
        .fotoPerfil {
            max-width: 150px;
        }
    
        .header h1, .header p {
            font-size: medium;
        }
    }
`