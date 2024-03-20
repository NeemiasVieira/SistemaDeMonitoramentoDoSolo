import styled from "styled-components";

export const PlantaStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    padding: 20px;
    border-radius: 5px;
    border: solid #ddd 1px;    
    gap: 15px;
    background-color: var(--white);
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);

    .Planta{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;    
    gap: 25px;

    }

    .nomeDaPlanta{
        font-size: 1.4rem;
        margin: 0;
    }

    h3{
        margin: 5px 0;
    }

    p{
        margin: 0;
    }

    .imagemPlanta{
        width: 150px;
        height: 150px;
    }

    .infoPlanta{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-flow: column wrap;
        gap: 5px;
    }

    .buttonDetalhes{
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms ease 0s;
    border: solid #000 1px;
    color: #000;
    background-color: var(--white);

    :hover{
        transform: scale(1.1);;
    }


    }

    @media screen and (max-width: 480px){
        max-width: 85vw;
        padding: 15px 0;
        gap: 0;
        border-radius: 10px;

        h2{
            padding-bottom: 10px;
            border-bottom: solid #ccc 1px;
            width: 100%;
        }

        .Planta{
            padding-top: 10px;
            max-width: 75vw;
            gap: 10px;
        }

        .infoPlanta{
            h3{
                display: none;
            }
        }

        .buttonDetalhes{
            margin-top: 5px;
            width: 125px;
            font-size: 1.1rem;
            height: 35px;
        }

        .imagemPlanta{
            width: 90px;
            height: 90px;
        }
    }

`