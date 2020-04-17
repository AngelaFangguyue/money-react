import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
background-color: #fff;
border:2px solid blue;
padding: 0 16px;
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
  >ul{
   margin: 0 -12px;
    >li{
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  >button{
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  color: #666;
  padding: 2px 4px;
  margin-top: 8px;
  }
`;

const x = ()=>{
  return (
  <TagsSection>
   <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ul>
          <button>新增标签</button>
  </TagsSection>
  );
};
//export default TagsSection;
export default x;