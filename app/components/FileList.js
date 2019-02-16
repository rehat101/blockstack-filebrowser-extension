import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../StyledComponents/button';
import { Wrapper, WrapperHeader } from '../StyledComponents/grid';

const List = styled.ul`
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: #202228;
  border-radius: 4px;
  margin-bottom: 10px;

  &:hover {
    background-color: #141516;
  }
`;

const ItemName = styled.div`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Size = styled.p`
  color: #606D73;
  margin: 0;
`;

const FileList = ({ data }) => (
  <React.Fragment>
    <Wrapper>
      <WrapperHeader>
        {data.length}
        {' '}
        total files
      </WrapperHeader>
      <List>
        {
          data.map(value => (
            <Link
              to={{ pathname: '/file', state: { file: value } }}
              key={value}
            >
              <Item>
                <ItemName>{value}</ItemName>
                <Size />
              </Item>
            </Link>
          ))
        }
      </List>
    </Wrapper>
    <Button color="#2523FF">Add File</Button>
  </React.Fragment>
);

export default FileList;
