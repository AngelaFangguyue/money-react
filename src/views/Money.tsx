import React, {useState} from 'react';
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

  const [selected,setSelected] = useState({
    tags:[] as string[],
    notes:'',
    category:'-' as ('-'|'+'),
    amount:12
  });

  type Selected = typeof selected;

  const onChange1 = (obj:Partial<Selected>)=>{
    setSelected({...selected,...obj});
  };

  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.notes}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <hr/>
      <TagsSection pselectedTags={selected.tags}
                   onChange={(tags)=>
                     onChange1({tags})
                     //setSelected({...selected,tags: tags})
                   }/>
      <NotesSection pnotes={selected.notes}
                    onChange={(notes)=>
                      onChange1({notes})
                      //setSelected({...selected,notes: notes})
                    }/>
      <CategorySection pcategory={selected.category}
                       onChange={(category)=>
                         onChange1({category})
                      //setSelected({...selected,category: category})
                       }/>
      <NumberPadSection poutput={selected.amount}
                        onChange={(amount)=>

                        setSelected({...selected,amount:amount })
                        }
                        onOk={(amount)=>
                          onChange1({amount})
                        //setSelected({...selected,amount:amount })
                        }/>
    </MyLayout>
  );
}

export  default  Money;