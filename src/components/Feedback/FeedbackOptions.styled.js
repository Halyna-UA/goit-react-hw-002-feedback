import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  padding: 10px;
  list-style: none;
`;
export const Item = styled.li`
  margin: 2px;
  border-radius: 10px;
`;
export const Button = styled.button`
  font-family: 'Roman';
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 6px 22px;
  &:hover,
  &:focus {
    background: #42f5b3;
  }
`;
