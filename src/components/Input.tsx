//import Layout from './Layout';
import React from 'react';
type Props = {
  label:string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = (props:Props)=>{
  const {label,...rest} = props

return(<div>
  <label>
    <span>{label}</span>
    {/*<input placeholder="请输入备注" value={note} onChange={(e)=>{setNote(e.target.value);}}/>*//*受控组件的写法*/}
    {/*  <input placeholder="请输入备注" value={props.pnotes}
              //onChange={(e)=>{setNote(e.target.value);}}//受控组件这样写是不行的，下面这样写才行
              onChange={(e)=>{props.onChange(e.target.value)}}
       />*/}
    {/*<input ref={refInput} placeholder="请输入备注" defaultValue={note}
              onBlur={onBlur}/>*/}{/*非受控组件的写法*/}
    {/*<input type="text" placeholder={props.placeholder} />*/}
    <input {...rest} />

  </label>
</div>)


}

export default Input;
// <div>
//   <label>
//     <span>标签名：</span>
//     {/*<input placeholder="请输入备注" value={note} onChange={(e)=>{setNote(e.target.value);}}/>*//*受控组件的写法*/}
//     {/*  <input placeholder="请输入备注" value={props.pnotes}
//               //onChange={(e)=>{setNote(e.target.value);}}//受控组件这样写是不行的，下面这样写才行
//               onChange={(e)=>{props.onChange(e.target.value)}}
//        />*/}
//     {/*<input ref={refInput} placeholder="请输入备注" defaultValue={note}
//               onBlur={onBlur}/>*/}{/*非受控组件的写法*/}
//     <input type="text" placeholder={tag.name} />
//   </label>
// </div>