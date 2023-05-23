import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: rgb(32 31 45);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: rgb(84, 106, 123);
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(216, 228, 255);
    max-width: 100%;
    min-width: 250px;
    width: 70vw;
    padding: 16px;
    height: 48px;
    margin: 0px 0px 16px;
    border: none;
  }
  button {
    border: none;
    border-radius: 8px;
    color: #fffbfa;
    background-color: #74c494;
    padding: 16px;
    cursor: pointer;
    transition: background 200ms ease 0s;
    width: 70vw;
    max-width: 100%;
    min-width: 250px;
    height: max-content;
    margin: 16px 0px 0px;
  }
`;

export const Boximagem = styled.div`
  display: none;
  width: 50vw;
  align-items: center;
  justify-content: center;
  background-color: #74c494;
  height: 100vh;

  img {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const LoginInputs = styled.div`
  h2 {
    font-size: 30px;
    color: rgb(255, 251, 250);
    line-height: 1;
    margin-bottom: 40px;
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    color: rgb(255, 251, 250);
    margin-bottom: 40px;
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-align: center;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 16px 46px;
    input {
      width: 100vw;
    }
  }
`;
