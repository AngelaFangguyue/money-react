import React from 'react';
//引入路由相关组件
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//引入styled-components相关组件
import Nofound from './views/NoFound';
import Statistics from './views/Statistics';
import Money from './views/Money';
import Label from './views/Label';
import styled from 'styled-components';

const AppWrapper = styled.div`
color:#333;
`;


function App() {
  return (
    <AppWrapper>
    <Router>
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
    </Router>
    </AppWrapper>
  );
}

export default App;
