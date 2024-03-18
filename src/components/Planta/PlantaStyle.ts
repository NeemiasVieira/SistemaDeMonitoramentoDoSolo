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

        .imagemPlanta{
            width: 100px;
            height: 100px;
        }
    }

`