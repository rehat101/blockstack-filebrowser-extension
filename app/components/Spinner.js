import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 80px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 30vh;
  right: 0;
  left: 0;
  color: white;

  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ellipsis steps(4,end) 900ms infinite;
    animation: ellipsis steps(4,end) 900ms infinite;
    content: " ...";
    width: 0px;
  }

  @keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }

  @-webkit-keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }
`;

const Spinner = () => <Text />;

export default Spinner;
