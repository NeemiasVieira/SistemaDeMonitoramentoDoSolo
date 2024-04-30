import { createGlobalStyle } from 'styled-components';


export const DarkTheme = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--bg-primary);
        color: #fff;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-track {
        background: #222;
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--dark-green);
        border: solid #53AF30 1.5px;
        border-radius: 5px;
    }

    code {
        font-family: 'Montserrat', sans-serif, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    :root {
    --gray-primary: #333333;  
    --bg-dark-blue: #023047; 
    --white: #E0E0E0;         
    --light-green: #5FA81D;   
    --dark-green: #2F7F16;    
    --bg-primary: #333; 
    --text-secondary: #ccc;
    --text-primary: #fff;
    }
`;

