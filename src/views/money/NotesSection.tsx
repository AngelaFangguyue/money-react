import styled from 'styled-components';
import React, {useRef} from 'react';

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

type Props = {
  pnotes:string;
  onChange:(notes:string)=>void;
}

const NotesSection:React.FC<Props> = (props)=>{

  //const [note,setNote] = useState('');
  //let pnotes = props.pnotes;//也可以不声明，直接在下面使用这个props.notes
  const refInput = useRef<HTMLInputElement>(null);
  // const onBlur = ()=>{
  //   if(refInput.current!==null){
  //    console.log(refInput.current.value);
  //     setNote(refInput.current.value);
  //   }
  // };
  const onBlur = ()=>{
    if(refInput.current!==null){
     //console.log(refInput.current.value);
      //setNote(refInput.current.value);
      props.onChange(refInput.current.value);
    }
  };

 return(
   <Wrapper>
     <label>
     <span>备注</span>
     {/*<input placeholder="请输入备注" value={note} onChange={(e)=>{setNote(e.target.value);}}/>*//*受控组件的写法*/}
     {/*  <input placeholder="请输入备注" value={props.pnotes}
              //onChange={(e)=>{setNote(e.target.value);}}//受控组件这样写是不行的，下面这样写才行
              onChange={(e)=>{props.onChange(e.target.value)}}
       />*/}
     {/*<input ref={refInput} placeholder="请输入备注" defaultValue={note}
              onBlur={onBlur}/>*/}{/*非受控组件的写法*/}
     <input ref={refInput} placeholder="请输入备注" defaultValue={props.pnotes}
              onBlur={onBlur}/>
    </label>
 </Wrapper>
 );
}
export default NotesSection;