import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
border:2px solid blue;
 font-size: 24px;
 
  >ul{
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    
    >li{
      flex-grow: 1;
      padding: 16px 0;
      text-align: center;
      position: relative;
      &.selected::after{
        content: "";
        display: block;
        height:3px;
        width:100%;
        background-color: #333;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
`;
function CategorySection() {
return(
  <Wrapper>
    <ul>
    <li className="selected">支出</li>
    <li>收入</li>
  </ul>
  </Wrapper>
);
}
export default CategorySection;