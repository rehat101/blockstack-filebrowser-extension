import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper, WrapperHeader } from '../StyledComponents/grid';
import Button from '../StyledComponents/button';

const List = styled.ul`
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span:first-child {
    color: #606D73;
    margin-right: 20px;
    text-align: right;
    width: 50px;
  }
`;

class FileInfo extends React.Component {
  render() {
    const { data, name } = this.props;

    return (
      <React.Fragment>
        <Wrapper>
          <WrapperHeader>General</WrapperHeader>
          <List>
            <Item>
              <span>name:</span>
              <span>{name}</span>
            </Item>
            <Item>
              <span>type:</span>
              <span>{data.contentType}</span>
            </Item>
          </List>
        </Wrapper>
        <Link to="/"><Button color="#606D73">Back</Button></Link>
      </React.Fragment>
    );
  }
}


export default FileInfo;
