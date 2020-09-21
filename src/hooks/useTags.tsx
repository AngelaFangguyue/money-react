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
  const [tags, setTags] = useState<tagType[]>([
    // {id:(new createId()).value,name:'衣'},
    // {id:(new createId()).value,name:'食'},
    // {id:(new createId()).value,name:'住'},
    // {id:(new createId()).value,name:'行'}
  ]);
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
    console.log(tags.filter((tag) => tag.id === tagId)[0]);
    for (let i = 0; i < tags.length; i++) {
      console.log("i,tags[i]:", tags[i].id, tags[i].name);
      console.log(typeof tags[i].id);
    }
    return tags.filter((tag) => tag.id === tagId)[0];
  };

  // const findTag
  console.log("55tags:", tags);
  return { tags, setTags, findTag };
};

export default useTags;
