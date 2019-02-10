import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: "Relative";
  color: white;
  background-color: #FF0038;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  height: 100%;
  position: absolute;

  h1 {
    marign: 0;
    font-size: 28px;
    font-weight: normal;
  }

`;

const Emoji = styled.div`
  font-size: 42px;
`;

const ErrorScreen = () => {
  return (
    <Wrapper>
      <Emoji>
        <span role="img" aria-label="sad">😔</span>
      </Emoji>
      <h1>Looks like this page doesn’t run on blockstack.</h1>
    </Wrapper>
  );
};

export default ErrorScreen;
