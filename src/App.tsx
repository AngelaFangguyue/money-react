import React from 'react';
//引入路由相关组件
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//引入styled-components相关组件
import styled from 'styled-components';
import Nav from './Components/Nav';
import Nofound from './Components/NoFound';
import Statistics from './Components/Statistics';
import Money from './Components/Money';
import Label from './Components/Label';

import x from 'Icons/money.svg';
console.log(x);

const Wrapper = styled.div`
display:flex;
flex-direction: column;
border:2px solid red;
height: 100vh;

`;

const Main = styled.div`
border:2px solid black;
flex-grow: 1;
overflow: auto;
`;








function App() {
  return (
    <Router>
      <Wrapper>
       <Main>
        <Switch>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/label">
            <Label />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <Nofound/>
          </Route>
        </Switch>
       </Main>
       <Nav/>
      </Wrapper>
    </Router>
  );
}

export default App;
