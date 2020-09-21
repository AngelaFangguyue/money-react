import React from "react";
import Layout from "components/Layout";
import useTags from "hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import Center from "../components/Center";
import Space from "../components/Space";

const Ul = styled.ul`
  font-size: 16px;
  background-color: white;
  > li {
    line-height: 20px;
    padding: 12px 16px 12px 0;
    border-bottom: 1px solid #d5d5d9;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
    }
  }
`;

// const Button = styled.button`
//   font-size: 18px;
//   border:none;
//   padding: 8px 12px;
//   border-radius: 4px;
//   background-color:#666 ;
//   color: white;
// `;

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Space = styled.div`
// height: 16px;
// `;

function Label() {
  //const {tags,setTags} = useTags();
  const { tags,addTag } = useTags();
  return (
    <Layout>
      <Ul>
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={"/label/" + tag.id}>
                <span className="oneline">
                  {tag.id}:{tag.name}
                </span>
                <Icon name="right" />
              </Link>
            </li>
          );
        })}
      </Ul>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button onClick={addTag}>新增标签</Button>
        <Space></Space>
      </Center>
    </Layout>
  );
}

export default Label;
