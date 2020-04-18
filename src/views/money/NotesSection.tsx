import styled from 'styled-components';
import React, {useRef, useState} from 'react';

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

const NotesSection:React.FC = ()=>{

  const [note,setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = ()=>{
    if(refInput.current!==null){
      console.log(refInput.current.value);
    }
  };

 return(
   <Wrapper>
     <label>
     <span>备注</span>
     {/*<input placeholder="请输入备注" value={note} onChange={(e)=>{setNote(e.target.value);}}/>*//*受控组件的写法*/}
     <input ref={refInput} placeholder="请输入备注" defaultValue={note}
              onBlur={onBlur}/>{/*非受控组件的写法*/}
    </label>
 </Wrapper>
 );
}
export default NotesSection;