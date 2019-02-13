import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.color};
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
    opacity: 0.8;
  }
`;

export default Button;
