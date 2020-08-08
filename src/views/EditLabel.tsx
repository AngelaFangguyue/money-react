import React from 'react';
import {useParams} from 'react-router-dom'
import useTags from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params = {
  tagId:string;
}

const  Topbar = styled.header`
display: flex;
justify-content: space-between;
line-height: 20px;
padding: 14px;
align-items: center;
background-color: white;
`;

const EditLabel:React.FC = ()=>{

  let {tagId} = useParams<Params>();
  let {findTag} = useTags();
  let tag =   findTag(parseInt(tagId));
  console.log(tag);
  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <label>
          <span>标签名：</span>
          {/*<input placeholder="请输入备注" value={note} onChange={(e)=>{setNote(e.target.value);}}/>*//*受控组件的写法*/}
          {/*  <input placeholder="请输入备注" value={props.pnotes}
              //onChange={(e)=>{setNote(e.target.value);}}//受控组件这样写是不行的，下面这样写才行
              onChange={(e)=>{props.onChange(e.target.value)}}
       />*/}
          {/*<input ref={refInput} placeholder="请输入备注" defaultValue={note}
              onBlur={onBlur}/>*/}{/*非受控组件的写法*/}
          <input type="text" placeholder={tag.name} />
        </label>
      </div>
      <div>
        hi,EditLabel,{tag.id}:{tag.name}
        <Button>删除标签</Button>
      </div>

    </Layout>
  );
}
export default EditLabel;