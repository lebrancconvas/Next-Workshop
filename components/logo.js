import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const BackTab = styled.div`
  padding: 4em;
  background: yellow;
`;

class Logo extends React.Component {
  render(){
    return(
      <div>
        <BackTab>Hello</BackTab>
      </div>
    );
  }
}

export default Logo;
