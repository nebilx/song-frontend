import styled from "@emotion/styled";
export const Container = styled.div`
  background-color: #474747;
  border-radius: 5%;
  padding: 5%;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  background: gray;
  border: none;
  border-radius: 5px;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  color: white;
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
`;
export const Head = styled.h1`
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
  margin: 10px;
  color: white;
`;
