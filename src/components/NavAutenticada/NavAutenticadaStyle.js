import styled from "styled-components";

export const NavAutenticadaStyle = styled.nav`
    *{
    font-family: 'Montserrat', sans-serif; 
}

.navegacao{
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 4vw;
    flex-flow: row;
    background-color: #107740;
    margin: 0;
    height: 7vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: solid black 1px;

}

li{
    list-style: none;
}

a{
    color: whitesmoke;
    text-decoration: none;
    font-weight: 500;
    transition: all 250ms;
}

a:hover{
    font-weight: 900;
    color: black;
}

.logout{
    position: absolute;
    right: 8%;
    top: 25%;
    margin: 0;

    button{
        width: 50px;
        border-radius: 5px;
        font-size: 1em;
        font-weight: 700;
        height: 30px;
        cursor: pointer;
        border: solid rgb(16, 119, 64) 1px;
        transition: transform 300ms;

        :hover{
            transform: scale(1.1);
        }
    }
}

.usuario{
    position: absolute;
    right: 17.5%;
    color: whitesmoke;
    font-weight: 500;
}

`