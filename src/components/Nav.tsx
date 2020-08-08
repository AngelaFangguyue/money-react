import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from 'components/Icon';


const NavWrapper = styled.nav`
background-color: #fff;
border:2px solid blue;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
   > ul{
    display: flex;
    > li{
      width: 33.3333%;
      text-align: center;
      > a{
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 0;
       .icon{
          width: 24px;
          height:24px;
          
        }
       &.selected{
        color:#666;
        .icon{
           fill:#666;
        }
       }
      }
     
      
    }
  }
`;

//写一个函数组件Nav
function Nav(){
  return (<NavWrapper>
    <ul>
      <li>
        <NavLink to="/money" activeClassName="selected">
          <Icon name="money"/>
          <span>记一笔</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/label" exact activeClassName="selected">
          <Icon name="label"/>
          <span>标签</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name="chart"/>
          <span>统计</span>
        </NavLink>
      </li>
    </ul>
  </NavWrapper>);
}

export default Nav;