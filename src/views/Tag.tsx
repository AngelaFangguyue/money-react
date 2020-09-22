import React from "react";
import useTags from "../hooks/useTags";
import { useParams } from "react-router-dom";

type Params = {
  tagId: string;
};

const Tag: React.FC = (props) => {
  const { tags, findTag } = useTags();
  console.log("tags:", tags);
  let { tagId } = useParams<Params>();
  console.log("tagId:", tagId);
  const tag = findTag(parseInt(tagId));
  console.log("tag:", tag);
  return <div>111</div>;
};

export default Tag;
