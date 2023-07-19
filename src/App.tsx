import React, { useState } from 'react';
import Circle from './Circle';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color : ${(props) => props.theme.textColor};
`;

function App() {

  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget: {value},
    } = event;

    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }

  return (
    <Container>
      <Circle bgColor="teal" borderColor="yellow"/>
      <Circle bgColor="tomato" text="HELLO"/>

      <form onSubmit={onSubmit}>
        <input type="text" 
          value={value}
          onChange={onChange}
          placeholder='username'/>
        <button>Log in</button>
      </form>

      <H1>Protected</H1>
    </Container>
  );
}

export default App;
