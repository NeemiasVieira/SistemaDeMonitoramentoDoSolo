import styled from 'styled-components';

export const ParametrosDaEspecieStyle = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--light-gray);

    h3 {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 20px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: solid var(--border-secondary) 1px;
  }

  th {
    border-bottom: 1px solid var(--border-secondary);
    background-color: var(--contrast);
    color: var(--text-primary);
    font-weight: bold;
    padding: 10px;
    width: 150px;
  }
  td {
    text-align: center;
    padding: 5px;
    border-right: 1px solid var(--border-secondary);
    border-bottom: solid 1px var(--border-secondary);
    background-color: var(--contrast);
  }

  @media screen and (max-width: 480px) {
    table {
      width: 80%;
    }
    th {
      width: 55px;
      padding: 5px;
    }
  }
`;
