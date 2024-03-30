import styled from "styled-components";

export const ModalNavigationStyle = styled.div`

color: #fff;

h2{
    margin: 40px 0;
}

.logo{
    display: none;
}

.navegacao{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 30px;
}

ul li a{
    color: var(--white);
    text-decoration: none;
    background-color: #111;
    padding: 10px;
    border-radius: 10px;
}

.closeButton{
    position: absolute;
    top: 10%;
    right: 15%;
    background-color: transparent;
    border: none;

    svg{
        color: #fff;
        font-size: 1.5rem;
    }
}


`