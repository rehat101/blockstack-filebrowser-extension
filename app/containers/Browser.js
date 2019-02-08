import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  color: white;
  position: relative;
`;

const Header = styled.header`
  font-family: SFProText-Regular, sans-serif;
  display: flex;
  align-items: center;
  padding: 20px 20px 0 25px;
  font-size: 18px;
`;

const List = styled.ul`
  font-family: Relative-Mono10Pitch, monospace;
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

const Button = styled.button`
  font-family: Relative-Mono10Pitch, monospace;
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

class Browser extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <Header>
          {data.length}
          {' '}
          total files
        </Header>
        <List>
          {
            data.map((value, key) => {
              return (
                <Item key={key}>
                  <ItemName>{value}</ItemName>
                  <Size>2kb</Size>
                </Item>
              );
            })
          }
        </List>
        <Button>Add File</Button>
      </Wrapper>
    );
  }
}

export default Browser;
