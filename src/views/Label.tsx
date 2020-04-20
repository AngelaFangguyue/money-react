import React from 'react';
import Layout from 'components/Layout';
import useTags from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const Ul = styled.ul`
font-size: 16px;
background-color: white;
  >li{
    line-height: 20px;
    padding:12px 16px 12px 0;
    border-bottom: 1px solid #d5d5d9;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  font-size: 18px;
  border:none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color:#666 ;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
height: 16px;
`;

function Label() {

  const {tags,setTags} = useTags();

  return (
    <Layout>
      <Ul>
        {tags.map(tag=>
          <li key={tag}>
            <span className="oneline">{tag}</span>
            <Icon name="right"/>
          </li>
        )}
      </Ul>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button>新增标签</Button>
        <Space></Space>
      </Center>
    </Layout>
  );
}

export  default  Label;