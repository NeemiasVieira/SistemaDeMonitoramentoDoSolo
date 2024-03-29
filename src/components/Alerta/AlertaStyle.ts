import styled from 'styled-components';

export const AlertaStyle = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
  border: solid #ffc222 3px;
  border-radius: 10px;
  padding: 10px;

  p {
    margin: 0;
    width: 40vw;
    max-width: 700px;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    margin-left: 10px;
    color: #ffc222;
    font-size: 2rem;
  }

  @media screen and (max-width: 480px){
    p{
        font-size: 13px;
        width: 100%;
    }

    svg{
      font-size: 1.2rem;
    }

  }
`;

export const SemAlertaStyle = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
  border: solid green 3px;
  border-radius: 10px;
  padding: 10px;

  p {
    margin: 0;
    width: 40vw;
    max-width: 500px;
    font-weight: 700;
  }

  svg {
    margin-left: 10px;
    color: green;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px){

    p{
        font-size: 13px;
        width: 60vw;
    }

  }
`;
