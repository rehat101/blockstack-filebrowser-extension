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
`;

const ItemType = styled.span`
  color: #606D73;
  width: 20%;
`;

const FileInfo = ({ data, name }) => (
  <React.Fragment>
    <Wrapper>
      <WrapperHeader>General</WrapperHeader>
      <List>
        <Item>
          <ItemType>name:</ItemType>
          <span>{name}</span>
        </Item>
        <Item>
          <ItemType>type:</ItemType>
          <span>{data.contentType}</span>
        </Item>
      </List>
    </Wrapper>
    <Link to="/"><Button color="#606D73">Back</Button></Link>
  </React.Fragment>
);


export default FileInfo;
