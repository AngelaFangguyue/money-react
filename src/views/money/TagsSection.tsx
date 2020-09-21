import React from 'react';
import styled from 'styled-components';
import useTags from '../../hooks/useTags';
import createId from '../../lib/createId';

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

type Props = {
  pselectedTagIds:number[];
  

  onChange:(tagsId:number[])=>void;
}

const TagsSection:React.FC<Props> = (props)=>{

  //const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  //const [selectedTags,setSelectedTags] = useState<string[]>([]);

  const {tags,setTags} = useTags();
  //console.log(useTags);

  let pselectedTagIds = props.pselectedTagIds;

  const onAddTag = ()=>{
    const newTag = window.prompt("请输入新增加的标签名：");
    if(newTag!==null){
        setTags((a)=>[...a,{id:(new createId()).value,name:newTag}]);
    }
  };

  const onToggleTag = (tagId:number)=>{
    if(pselectedTagIds.indexOf(tagId)>=0){
      //setSelectedTags((x)=>x.filter(i=>i!==tag));
      //console.log("onToggleTag1");
      //console.log("1:",pselectedTags.filter(i=>i!==tag));
      //console.log("1:",pselectedTags);

      props.onChange(pselectedTagIds.filter(i=>i!==tagId));

    }else{
      //setSelectedTags((x)=>[...x,tag]);
      //console.log("onToggleTag2");
      //console.log("2:",[...pselectedTags,tag]);
      //console.log("2:",pselectedTags);
      props.onChange([...pselectedTagIds,tagId]);
      //props.onChange({tags:[...pselectedTags,tag]});
    }
  };

  const getClassName = (tagId:number)=>{
    return pselectedTagIds.indexOf(tagId)>=0?'selected':'w';
  };

  return (
  <Wrapper>
   <ul>
      {tags.map(tag=><li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={getClassName(tag.id)}>{tag.name}</li>)}
   </ul>
   <button onClick={onAddTag}>新增标签</button>
  </Wrapper>
  );
};
export default TagsSection;
