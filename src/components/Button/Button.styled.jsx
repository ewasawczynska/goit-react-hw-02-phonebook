import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: white;
  border: 1px dotted grey;
  border-radius: 5%;
  color: grey;
  font-weight: 600;
  margin-left: 10px;
  outline: none;
  width: 100px;

  &:hover {
    background-color: grey;
    color: white;
    cursor: pointer;
  }
`;
