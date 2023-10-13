import styled from "styled-components";

export const PlantaStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    padding: 20px;
    border-radius: 5px;
    border: solid #000 1px;    
    gap: 15px;

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

    :hover{
        transform: scale(1.1);;
    }


    }


`