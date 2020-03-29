import React, { Component } from 'react';
import axios from 'axios';
import PictureList from './picture-list';
import styled from 'styled-components';
import LoadMore from './load-more';

const Title = styled.h1`
  display: flex;
  justify-content: center;

  width: 15rem;
  padding: 1rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  border-radius: 10px;
  background-color: #ffe066;
`;

class App extends Component {
  state = {
    images: [],
    isPending: false
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          // client_id: 'WKdnXNbHSg9MnPSYdq1RbwVWc0fNM_8ELECXhIR5hMo',
          // client_id: 'z4Qnf_reTqGc5uZNA8iZ9D40qQL-E7kuz4m0Dw6Fx-M',
          // client_id: 'EeY0xxNv9tR3g56W_Z1-hR73A9BNcJq26l1HH_OVEzg',
          client_id: 'aSaoYrLQXFca00oeG5F2pSWyc5aPdHH3S5TtVe3I8OI',
          count: 10
        }
      })
      .then(res => {
        this.setState({
          images: [...this.state.images, ...res.data.map(images => images.urls.small)],
          isPending: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isPending: false
        });
      });
  };


  render() {
    console.log(this.state.images);
    return (
      <>
        <Title>Infinity Photos</Title>
        <PictureList images={this.state.images} />
        <LoadMore loadMore={this.getImages} />
      </>
    );
  }
}

export default App;