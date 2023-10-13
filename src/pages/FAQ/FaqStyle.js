import styled from "styled-components";

export const FaqMain = styled.main`
    min-height: 93vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
    margin-bottom: 50px;

    h1{
        margin: 100px 0 40px 0;
        text-align: center;
    }

    h2{
        margin: 10px;
        width: 70vw;
        text-align: center;
    }

    .subtitulo{
        margin: 15px 0 0 0;
    }


    @media screen and (max-width: 480px){
        h1{
            font-size: 1.4em;
        }
    }

`