import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const Butt = styled.button`
  background-color: green;
  color: yellow;
`;

class Index extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Link href="/"><Butt className="is-primary">Home</Butt></Link>
          <Link href="/play"><Butt className="is-primary">Play</Butt></Link>
        </div>
        <h1>Hello Next</h1>
        <div>
          <a href="https://github.com/lebrancconvas/Next-Workshop"><Butt>My Repo Ok!</Butt></a>
        </div>
      </div>
    );
  }
}

export default Index;
