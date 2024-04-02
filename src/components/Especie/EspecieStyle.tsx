import styled from "styled-components";

export const EspecieStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--white);
  width: 800px;
  height: auto;
  border: solid #ccc 1px;
  border-radius: 10px;
  padding: 10px 20px 0 20px;
  overflow-x: hidden;

  h3 {
    margin: 15px 0 0 0;
  }

  .descricao {
    color: #444;
    height: 70px;
    max-height: 70px;
    overflow: hiddren ;
    font-size: .9rem;
    padding: 0;
    margin-bottom: 5px;
    background-color: #fff;
  }

  .buttonActions {
    position: relative;
    top: -320px;
    right: -88.7%;
    display: flex;
    gap: 10px;
    height: 1px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    border: 1px solid #aaa;
    padding: 2px;
    text-align: left;
    text-align: center;
    font-size: 0.9rem;
    color: #222;
  }
  th {
    background-color: #f2f2f2;
    border: solid #555 1px;
  }
  /* tr:nth-child(even) {
    background-color: #ddd;
  } */
`;
