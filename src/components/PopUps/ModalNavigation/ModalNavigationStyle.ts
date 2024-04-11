import styled from "styled-components";

export const ModalNavigationStyle = styled.div`

    display: flex;
    flex-flow: column wrap;
    margin-top: 70px;
    color: #000;

h2{
    margin: 40px 0;
    text-align: center;
}

.logo{
    display: none;
}

.navegacao{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
}

ul li a{
    display: flex;
    justify-content: center;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
}
`