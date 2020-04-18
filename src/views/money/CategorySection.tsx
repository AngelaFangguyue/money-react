import styled from 'styled-components';
import React, {useState} from 'react';


const Wrapper = styled.section`
border:2px solid blue;
 font-size: 24px;
 
  >ul{
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    
    >li{
      flex-grow: 1;
      padding: 16px 0;
      text-align: center;
      position: relative;
      &.selected::after{
        content: "";
        display: block;
        height:3px;
        width:100%;
        background-color: #333;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
`;
const CategorySection:React.FC = ()=>{
  const categoryMap = {'-':"支出",'+':"收入"};
  const [category,setCategory] = useState<('-'|'+')>('-');
  const [categoryList] = useState<('-'|'+')[]>(['-','+']);

  const onSelected = (i:('-'|'+'))=>{
    setCategory(i);
  };

return(
  <Wrapper>
    <ul>
    {categoryList.map(i=>
      <li key={i} className={category===i?"selected":""} onClick={()=>onSelected(i)}>
        {categoryMap[i]}
      </li>)}
    </ul>
  </Wrapper>
);
}
export default CategorySection;