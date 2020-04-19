import React, {useState} from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

type Props = {
  poutput:number;
  onChange:(poutput:number)=>void;
  onOk ? :(poutput:number)=>void;
}

const NumberPadSection:React.FC<Props> = (props)=>{

  const [output,_setOutput] = useState('100');
  let  poutput = props.poutput.toString();

  const setOutput = (output:string)=>{

    if(output.length>16){
      output = output.slice(0,16);
    }else if(output.length===0){
      output = '0';
    }
    _setOutput(output);
    //props.onChange(parseFloat(output));
    //console.log("2:",output);
  }
  const onNum = (e:React.MouseEvent)=>{
   // console.log(output);
    const numValue = (e.target as HTMLButtonElement).textContent;
    if(numValue===null){
      return;
    }
    if(numValue==='OK'){
      //console.log("hiok");
      //console.log(parseFloat(output));
      //TODO
      if(props.onOk) {
        props.onOk(parseFloat(output));
        //console.log(output);
        setOutput('');
      }
    }
    if('*1234567890.'.split('').concat(['删除','清空']).indexOf(numValue)>=0){
      //setOutput(generateOutput(numValue,output));
      //console.log("numValue");
      //console.log(numValue);
      //console.log('*1234567890.'.split('').concat(['删除','清空']).indexOf(numValue));
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