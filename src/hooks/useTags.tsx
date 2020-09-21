import { useEffect, useState } from "react";
import createId from "../lib/createId";
import { useUpdate } from "./useUpdate";

type tagType = {
  id: number;
  name: string;
};
// const defauleTags = [
//   {id:(new createId()).value,name:'衣'},
//   {id:(new createId()).value,name:'食'},
//   {id:(new createId()).value,name:'住'},
//   {id:(new createId()).value,name:'行'}
//   ];
const useTags = () => {
  //  const [tags,setTags] = useState<tagType[]>(defauleTags );

  const [tags, setTags] = useState<tagType[]>([]);


  console.log("11tags:", tags);

  useEffect(() => {



    let localTags = JSON.parse(window.localStorage.getItem("tags1") || "[]");
    console.log("localstorage:", localTags);

    if (localTags.length < 1) {

      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
    console.log("22tags:", tags);
    // eslint-disable-next-line
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("tags1", JSON.stringify(tags));
    console.log("33tags:", tags);
  }, tags);

  const findTag = (tagId: number) => {
    console.log("44tags:", tags);
    return tags.filter((tag) => tag.id === tagId)[0];
  };

  const findTagName = (tagId:number) => {
    let tag = findTag(tagId);
    if (tag) {
      return tag.name;
    } else {
      return "无标签";
    }
  };

  const findTagIndex = (tagId:string) => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === parseInt(tagId)) {
        index = i;
        break;
      }
    }
    return index;
  };

  const updateTag = (tagId:number, newTagName:string) => {
    // let index = findTagIndex(tagId);
    // let updatedTag = JSON.parse(JSON.stringify(tags));
    // updatedTag.splice(index, 1, { id: tagId, name: newTagName });
    // console.log("updateTag:", updatedTag);
    // setTags(updatedTag);
    setTags(
      tags.map((i) => {
        // if(tagId===i.id){
        //   return { id: tagId, name: newTagName }
        // }else{
        //   return i
        // }
        return tagId === i.id ? { id: tagId, name: newTagName } : i;
      })
    );
    //console.log("update>tags:", tags);
  };

  const deleteTag = (tagId:number) => {
    // let index = findTagIndex(tagId);
    // let updatedTag = JSON.parse(JSON.stringify(tags));
    // updatedTag.splice(index, 1);
    // console.log("updateTag:", updatedTag);
    // setTags(updatedTag);
    setTags(tags.filter((i) => i.id !== tagId));
    //console.log("delete>tags:", tags);
  };

  const addTag = () => {
    let newTag = window.prompt("请输入新的标签名");

    if (newTag) {
      setTags([...tags, { id: createId(), name: newTag }]);
    }
    //console.log("tags:", tags);
  };

  console.log("55tags:", tags);
  return { tags, setTags, findTag,addTag,deleteTag,updateTag,findTagIndex,findTagName };
};

export default useTags;
