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
        background-color: #53BF30;
        border: solid #53AF30 1.5px;
        border-radius: 5px;
    }

    code {
        font-family: 'Montserrat', sans-serif, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    :root {
    --gray-primary: #ccc;  
    --bg-dark-blue: #054472; 
    --white: #111;         
    --light-green: #5FA81D;   
    --dark-green: #8CDF27;    
    --bg-primary: #222; 
    --text-secondary: #ccc;
    --text-primary: #fff;
    --border-primary: #555;
    --border-secondary: #ccc;
    --button-primary: #333;
    --footer: #000;
    --border-hover: #777;
    --bg-modal: rgba(50, 50, 50, 0.6);
    }
`;

