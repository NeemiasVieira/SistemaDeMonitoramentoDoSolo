import styled from "styled-components";

export const FaqMain = styled.main`
    min-height: 93vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;

    h1{
        margin-top: 100px;
        text-align: center;
    }


    @media screen and (max-width: 480px){
        h1{
            font-size: 1.4em;
        }
    }

`