import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
border:2px solid blue;
background-color: #f5f5f5;
padding: 0 16px;
font-size: 14px;
  >label{
  display: flex; 
  align-items: center;
    >span{
      white-space: nowrap;
      margin-right: 16px;
    }
    >input{
      border:none;
      width: 100%;
      height: 72px;
      background: none;
    }
}
`;

function NotesSection() {
 return(
   <Wrapper>
     <label>
     <span>备注</span>
     <input placeholder="请输入备注"/>
    </label>
 </Wrapper>
 );
}
export default NotesSection;