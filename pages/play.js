import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Butt = styled.button`
  background-color: green;
  color: yellow;
`;

class Play extends React.Component {
  render() {
    return(
      <div>
        <div>
          <Link href="/"><Butt className="is-primary">Home</Butt></Link>
          <Link href="/play"><Butt className="is-primary">Play</Butt></Link>
        </div>
        <h1>Lets play bro</h1>
        <div>
          <a href="https://github.com/lebrancconvas/Next-Workshop"><Butt>My Repo Ok!</Butt></a>
        </div>
      </div>
    );
  }
}

export default Play;
