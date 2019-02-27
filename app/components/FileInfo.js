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
  display: grid;
  grid-template-columns: 60px 1fr;
  margin-bottom: 10px;
`;

const ItemType = styled.span`
  color: #606D73;
  width: 20%;
`;

const ItemValue = styled.span`
  word-break: break-all;
`;

const TextArea = styled.textarea`
  white-space: pre-wrap;
  width: 300px;
  border: 0;
  height: 200px;
  color: white;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  word-break: break-all;
  font-family: "Relative";
  background-color: #0000004d;
  padding: 20px;
  resize: none;
`;

const FileInfo = ({ data, name }) => (
  <React.Fragment>
    <Wrapper>
      <WrapperHeader>General</WrapperHeader>
      <List>
        <Item>
          <ItemType>name:</ItemType>
          <ItemValue>{name}</ItemValue>
        </Item>
        <Item>
          <ItemType>type:</ItemType>
          <ItemValue>{data.contentType}</ItemValue>
        </Item>
      </List>
      <TextArea defaultValue={data.content.toString()} />
    </Wrapper>
    <Link to="/"><Button color="#606D73">Back</Button></Link>
  </React.Fragment>
);


export default FileInfo;
