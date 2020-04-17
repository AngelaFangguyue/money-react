import styled from 'styled-components';

const NotesSection = styled.section`
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
export default NotesSection;