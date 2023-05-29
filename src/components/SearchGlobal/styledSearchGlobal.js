import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: rgb(32 31 45);
  height: 100vh;
`;

export const StyledForm = styled.form`
  width: 100vw;
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;

  select {
    margin-bottom: 8px;
    width: 50%;
    background-color: rgb(84, 106, 123);
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(216, 228, 255);
    padding: 7px;
    border-radius: 15px;
    border: none;
  }
  button {
    margin-top: 15px;
    width: 100%;
    border: none;
    border-radius: 8px;
    color: #fffbfa;
    background-color: #74c494;
    padding: 11px;
    font-size: medium;
    cursor: pointer;
    transition: background 200ms ease 0s;
  }
`;

export const StyledDivLista = styled.div`
  width: 90vw;
  border: 1px solid rgb(84, 106, 123);
  padding: 16px 20px;
  margin: 0 auto;
  h3 {
    font-size: 14px;
    text-align: center;
    color: #fffbfa;
  }
`;

export const StyledUL = styled.ul`
  height: 40vh;
  overflow-y: scroll;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  div {
  }
`;

export const StyledDivPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100px;
  img {
    border-radius: 50%;
    height: 40px;
  }
`;

export const StyledLeagueDataDiv = styled.div`
  padding: 16px 20px;
  color: rgb(216, 228, 255);
`;

export const StyledLeagueDataLineUpsDiv = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
`;

export const StyledLeagueDataLineUpsUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
