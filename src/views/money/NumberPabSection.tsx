import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
border:2px solid blue;
display: flex;
flex-direction: column;
  >.output{
  line-height: 72px;
  padding: 0 16px;
  text-align: right;
  background-color: #fff;
  font-size: 36px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
 
  >.pad{
    > button{
    font-size: 18px;
    width: 25%;
    height: 64px;
    border: none;
   float: left;
   &.ok{height:128px;
   float:right;}
   &.zero{width:50%}
      &:nth-child(1){
        background-color: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background-color:#e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background-color: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background-color: #c1c1c1;
      }
       &:nth-child(8),
       &:nth-child(11),
       &:nth-child(13){
          background-color: #b8b8b8;
       }
       &:nth-child(12){
          background-color: #9a9a9a;
       }
       &:nth-child(14){
          background-color:#a9a9a9;
       }
    }
   }
`;
const NumberPadSection:React.FC = ()=>{

  const [output,_setOutput] = useState('100');
  const setOutput = (output:string)=>{
    if(output.length>16){
      return
    }else if(output.length===0){
      output = '0';
    }
    _setOutput(output);
  }
  const onNum = (e:React.MouseEvent)=>{
    const numValue = (e.target as HTMLButtonElement).textContent;
    switch (numValue){
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if(output==='0'){
          setOutput(numValue);
        }else{
          setOutput((output + numValue));
        }
        break;
      case '.':
        if(output.indexOf('.')>=0){
          return;
        }else{
          setOutput((output + numValue))
        }
        break;
      case 'OK':
        console.log("ok:",output);
        break;
      case '清空':
        setOutput('');
        break;
      case '删除':
        if(output.length<=1){
          setOutput('');
          return;
        }else{
          setOutput(output.slice(0,-1));
        }
        break;
      default:
        return;
    }

  };
  return(
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={(e)=>onNum(e)}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="delete">删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="clear">清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
}

export  default NumberPadSection;