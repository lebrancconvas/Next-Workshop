import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Butt = styled.button`
  background-color: green;
`;

class Index extends React.Component {
  render(){
    return(
      <div>
        <Link href="/play"><Butt className="is-primary">TWO</Butt></Link>
        <h1>Hello Next</h1>
      </div>
    );
  }
}

export default Index;
