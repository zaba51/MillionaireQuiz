import {createGlobalStyle} from "styled-components"

 export default createGlobalStyle`
   html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        //overflow-y: hidden;
        background: linear-gradient(#032495,#3d71ff);
    }
    
    a, button {
        font-family: 'Montserrat', sans-serif;
    }
 `