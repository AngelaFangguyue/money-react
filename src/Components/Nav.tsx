import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from 'Components/Icon';


const NavWrapper = styled.nav`
border:2px solid blue;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul{
    display: flex;
    li{
      flex-grow: 1;
      padding: 4px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height:24px;
      }
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