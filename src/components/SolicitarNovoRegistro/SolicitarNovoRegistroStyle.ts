import styled from "styled-components";

export const SolicitarNovoRegistroStyle = styled.div`

background-color: var(--white);
padding: 15px 25px;
border-radius: 10px;
width: 675px;
margin-bottom: 20px;
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 135px;
border: solid var(--border-primary) 1px;

.plantaInfo{
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 2px;
  width: 50%;
  height: 100%;
  

  p{
    margin: 0;
  }

  h3{
    margin: 10px 0;
  }
}

.Acoes{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 50%;
  height: 100%;

  .svg{
    font-size: 2.7rem;
    color: var(--dark-green);
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--white);
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 7px;
    border: solid #aaa 1px;
    color: var(--text-primary);
    font-size: 1.2rem;
    cursor: pointer;
  }

  h3{
    margin: 0 0 20px 0;
  }
}

@media screen and (max-width: 480px) {
  width: 80vw;
  flex-flow: column wrap;
  font-size: .9rem;
  height: auto;
  gap: 20px;

  .plantaInfo, .Acoes{
    width: 100%;
  }

  .plantaInfo{
    h3{
      text-align: center;
    }
  }
}
  
`