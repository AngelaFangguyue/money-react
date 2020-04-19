import React, {useState} from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

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

    if(numValue===null){
      return;
    }
    if(numValue==='OK'){
      //TODO
      return;
    }
    if(('1234567890.'.split('')).concat(['删除','清空']).indexOf(numValue)){
      setOutput(generateOutput(numValue,output));
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