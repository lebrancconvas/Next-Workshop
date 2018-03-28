import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../components/logo.js';

const Butt = styled.button`
  background-color: green;
  color: yellow;
`;


class Play extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Link href="/"><Butt>Home</Butt></Link>
          <Link href="/play"><Butt>Play</Butt></Link>
        </div>
        <Logo />
        <h1>Lets play bro</h1>
        <div>
          <a href="https://github.com/lebrancconvas/Next-Workshop"><Butt>My Repo is here!</Butt></a>
        </div>
      </div>
    );
  }
}

export default Play;
