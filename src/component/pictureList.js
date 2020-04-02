import React, { Component } from 'react';
import styled from 'styled-components';
import Picture from './picture';

const Content = styled.div`
    margin-top: 1rem;
    line-height: 0;
    
  @media screen and (max-width: 832px) {
    column-count: 1;
    column-gap: 20px;
  }
  @media screen and (min-width: 833px) and (max-width: 1232px) {
    column-count: 2;
    column-gap: 20px;
  }
  @media screen and (min-width: 1233px) and (max-width: 1680px) {
    column-count: 3;
    column-gap: 20px;
  }
`;

class PictureList extends Component {
  render = () => {
    const renderImage = images => {
      return images.map((x, i) => <Picture key={i} url={x} />);
    };

    return <Content>{renderImage(this.props.images)}</Content>
  };
}

export default PictureList;