import React from 'react';
import {useParams} from 'react-router-dom'
import useTags from '../useTags';

type Params = {
  tagId:string;
}

const EditLabel:React.FC = ()=>{

  let {tagId} = useParams<Params>();
  let {findTag} = useTags();
  let tag =   findTag(parseInt(tagId));
  console.log(tag);
  return(
    <div>hi,EditLabel,{tag.id}:{tag.name}</div>
  );
}
export default EditLabel;