import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: #fff;
border:2px solid blue;
padding: 0 16px;
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
  >ul{
   margin: 0 -12px;
    >li{
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background-color:#f60;
      }
    }
  }
  >button{
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  color: #666;
  padding: 2px 4px;
  margin-top: 8px;
  }
`;

const TagsSection:React.FC = ()=>{

  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags] = useState<string[]>([]);


  const onAddTag = ()=>{
    const newTag = window.prompt("请输入新增加的标签名：");
    if(newTag!==null){
        setTags((a)=>[...a,newTag]);
    }
  };

  const onToggleTag = (tag:string)=>{
    if(selectedTags.indexOf(tag)>=0){
      setSelectedTags((x)=>x.filter(i=>i!==tag));
      console.log("onToggleTag1");
    }else{
      setSelectedTags((x)=>[...x,tag]);
      console.log("onToggleTag2");
    }
  };

  const getClassName = (tag:string)=>{
    return selectedTags.indexOf(tag)>=0?'selected':'w';
  };

  return (
  <Wrapper>
   <ul>
      {tags.map(tag=><li key={tag} onClick={()=>onToggleTag(tag)} className={getClassName(tag)}>{tag}</li>)}
   </ul>
   <button onClick={onAddTag}>新增标签</button>
  </Wrapper>
  );
};
export default TagsSection;
