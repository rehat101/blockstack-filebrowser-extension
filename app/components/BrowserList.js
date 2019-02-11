import React from 'react';
import styled from 'styled-components';
import Button from '../StyledComponents/button';

const Wrapper = styled.section`
  color: white;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 25px;
  font-size: 18px;
`;

const List = styled.ul`
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
  padding: 20px 20px 40px 25px;
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
  opacity: 0.5;
  margin: 0;
`;

const BrowserList = ({ data }) => {
  return (
    <Wrapper>
      <Header>
        {data.length}
        {' '}
        total files
      </Header>
      <List>
        {
          data.map((value) => {
            return (
              <Item key={value}>
                <ItemName>{value}</ItemName>
                <Size>0kb</Size>
              </Item>
            );
          })
        }
      </List>
      <Button>Add File</Button>
    </Wrapper>
  );
};

export default BrowserList;
