import {useState} from 'react';
import createId from './createId';

const defauleTags = [
  {id:(new createId()).value,name:'衣'},
  {id:(new createId()).value,name:'食'},
  {id:(new createId()).value,name:'住'},
  {id:(new createId()).value,name:'行'}
  ];

const useTags = ()=>{
  const [tags,setTags] = useState<{
    id:number;
    name:string;
  }[]>(defauleTags );

  const findTag = (tagId:number)=>tags.filter(tag=>tag.id===tagId)[0];

  return {tags,setTags,findTag};
};

export default useTags;