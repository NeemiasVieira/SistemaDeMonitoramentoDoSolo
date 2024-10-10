import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  color: var(--white);
  background-color: var(--footer);
  height: auto;
  padding: 40px 20px;
  max-width: 100vw;

  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  /* Footer styles */

  .Intro {
    margin: 5px 5px 0 0;

    p {
      max-width: 300px;
      margin-bottom: 45px;
    }
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    padding: 0 0 0 15px;
  }

  .footerServices {
    max-width: 200px;
  }

  .footer-section {
    flex: 1;
    margin: 5px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    max-width: 200px;
  }

  ul li {
    margin-bottom: 10px;
    max-width: 200px;
  }

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: rgb(16, 187, 64);
  }

  .social-media-icons {
    display: flex;
  }

  .social-media-icons a {
    margin-right: 15px;
    font-size: 1.25rem;
  }

  .footer-bottom {
    width: 100%;
    padding: 0 20px;
    max-width: calc(100vw - 40px);
    text-align: center;
    padding: 10px 0;
  }

  .footer-bottom p {
    font-size: 0.9rem;
  }

  svg {
    font-size: 2rem;
  }

  @media print {
    display: none;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 10px 40px 0;
    max-width: calc(100vw - 10px);

    .Intro {
      display: flex;
      justify-content: center;
      flex-flow: column wrap;
      margin: 0 0 20px 0;
    }

    .footer-content {
      flex-flow: column wrap;
      padding: 0;
      gap: 5px;
      padding: 0 0 0 15px;
    }

    p {
      max-width: 90vw;
      padding: 0;
    }

    .copyrights {
      max-width: 90vw;
    }

    .Intro p {
      width: 380px;
      max-width: 400px;
    }

    img {
      width: 80%;
      height: auto;
      align-self: center;
    }
  }
`;
