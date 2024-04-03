import styled from "styled-components";

export const HomePrivateMain = styled.main`

    min-height: 93vh;
    overflow-x: hidden;    
    background-color: var(--bg-primary);

    main{
        margin-top: 100px;
        width: 100vw;

        h1{
            font-size: 1.5em;
        }
        h2{
            font-size: 1em;
            font-weight: 600;
            margin: 10px 0;
        }

        .subTitulo{
            color: #444;
        }

        h1,h2{
            text-align: center;
        }
    }

    .Plantas{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        gap: 50px;
        margin-bottom: 20px;
    }

    .divPlantas{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 25px;
    }

    .suasPlantas{
        font-size: 1.6rem;
    }

    @media screen and (max-width: 480px){

        margin-top: 50px;
        min-height: 200px;

        .Plantas{
            margin-top: 25px;
            gap: 25px;
        }
    }

`