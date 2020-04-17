import styled from 'styled-components';
import Nav from './Nav';
import React from 'react';

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

const Layout = (props:any)=>{
  return(
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
}

export default Layout;