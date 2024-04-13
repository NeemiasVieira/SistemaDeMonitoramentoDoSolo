import styled from "styled-components";

export const FaqMain = styled.main`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
    margin-bottom: 50px;
    background-color: var(--bg-primary);

    h1{
        margin:50px 0 10px 0;
        text-align: center;
        letter-spacing: 3px;
    }

    h2{
        margin: 10px;
        width: 70vw;
        text-align: center;
    }

    .subtitulo{
        margin: 15px 0 10px 0;
        color: #222;
    }


    @media screen and (max-width: 480px){
        h1{
            font-size: 1.7rem;
            margin: 50px 0 10px 0;
        }

        .subtitulo{
            font-size: 1.3rem;
            width: 90vw;
        }
    }

`