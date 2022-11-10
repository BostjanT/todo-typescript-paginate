import styled from "styled-components";

export const Section = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  background: rgba(35, 48, 96, 0.16);
  border-radius: 16px;
  box-shadow: 3px 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(250, 143, 19, 0.54);
`;

export const InputDiv = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 0.3rem 1rem;
  margin: 0 0.5rem;
  border: unset;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const TaskDisplay = styled.div`
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const SingleTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: start;

  background: rgba(105, 105, 105, 0.5);
  margin: 1rem;
  padding: 8px;
  border-radius: 8px;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 0.35rem 1.2rem;
  background: rgb(58, 50, 168);
  color: #fff;

  border: unset;
  border-radius: 5px;
  cursor: pointer;
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.li`
  display: inline-block;
  border: 1px solid black;
  background: $fff;
  color: black;
  font-size: 0.875rem;

  padding: 4px 8px;
  margin: 0 5px;
`;
