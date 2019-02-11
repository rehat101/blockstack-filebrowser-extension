import styled from 'styled-components';

const Button = styled.button`
  background-color: #2523FF;
  border: 0;
  width: 100%;
  color: white;
  height: 46px;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #110FE0;
  }
`;

export default Button;
