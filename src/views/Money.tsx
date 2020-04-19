import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import TagsSection from './money/TagsSection';
import NotesSection from './money/NotesSection';
import NumberPadSection from './money/NumberPabSection';
import CategorySection from './money/CategorySection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
function Money() {

  // const [selected,setSelected] = useState({
  //   tags:[] as string[],
  //   notes:'',
  //   category:'1' as ('-'|'+'),
  //   amount:0
  // });

  return (
    <MyLayout>
      <TagsSection />
      <NotesSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export  default  Money;