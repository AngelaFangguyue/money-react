import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
// import TagsSection from './money/TagsSection';
import A from './money/TagsSection';
import NotesSection from './money/NotesSection';
import NumberPadSection from './money/NumberPabSection';
import CategorySection from './money/CategorySection';






const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
function Money() {
  return (
    <MyLayout>
      {/*<TagsSection>*/}
      {/*  <ul>*/}
      {/*    <li>衣</li>*/}
      {/*    <li>食</li>*/}
      {/*    <li>住</li>*/}
      {/*    <li>行</li>*/}
      {/*  </ul>*/}
      {/*  <button>新增标签</button>*/}
      {/*</TagsSection>*/}
      <A/>
      <NotesSection>
        <label>
          <span>备注</span>
          <input placeholder="请输入备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export  default  Money;