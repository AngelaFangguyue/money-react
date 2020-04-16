import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



// const NavWrapper = styled.div`
// border:2px solid blue;
// text-align: center;
// nav{
//   ul{
//     display: flex;
//     li{
//       flex-grow: 1;
//       padding: 16px;
//     }
//   }
// }
// `;

const NavWrapper = styled.nav`
border:2px solid blue;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul{
    display: flex;
    li{
      flex-grow: 1;
      padding: 16px;
      text-align: center;
    }
  }
`;

//写一个函数组件Nav
function Nav(){
  return (<NavWrapper>
    <ul>
      <li>
        <Icon name="money"/>
        <Link to="/money">Money</Link>
      </li>
      <li>
        <Icon name="label"/>
        <Link to="/label">Label</Link>
      </li>
      <li>
        <Icon name="chart"/>
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </NavWrapper>);
}

export default Nav;