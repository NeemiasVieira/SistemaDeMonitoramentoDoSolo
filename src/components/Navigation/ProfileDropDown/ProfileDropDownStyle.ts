import styled from "styled-components";

export const ProfileDropDownStyle = styled.div`
  margin-right: 40px;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: var(--contrast);
  font-weight: 700;
  cursor: pointer;
  background-color: var(--bg-dark-blue);

  .switchThemeOnDropDown {
    display: flex;
    flex-flow: row nowrap;
    padding: 8px 0;

    .texto {
      width: 160px;
      margin-left: 40px;
      text-align: initial;
    }
    svg {
      position: absolute;
      left: 25px;
    }
  }

  .dropdown {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown-content {
    top: 63px;
    right: 5%;
    display: none;
    position: absolute;
    background-color: var(--button-primary);
    min-width: 260px;
    z-index: 1;
    box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.2);
    color: var(--text-primary);
    border-radius: 15px 0 15px 15px;
    border: solid var(--border-primary) 1px;
    cursor: default;
    ul {
      padding: 10px;
      margin: 0px;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      margin-right: 5px;
    }
  }
  .dropdown-content a {
    display: flex;
    justify-content: center;
    align-items: center;
    float: none;
    color: var(--text-primary);
    width: 100%;
    padding: 12px 16px;
    display: block;
    text-align: initial;
    border-radius: 5px;
  }
  .dropdown-content a:hover {
    background-color: #ccc;
    color: black;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media screen and (min-width: 482px) and (max-width: 850px) {
    .dropdown-content {
      right: 9%;
    }
  }

  @media screen and (min-width: 851px) and (max-width: 1100px) {
    .dropdown-content {
      right: 7%;
    }
  }
`;
