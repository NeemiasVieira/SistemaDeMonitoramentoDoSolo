import styled from "styled-components";

export const ModalIndexStyle = styled.div`
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

  .closeButton {
    font-size: 1rem;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    color: var(--text-primary);
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 12px;
  }
`;
