import React, { Component } from 'react';
import axios from 'axios';
import PictureList from './picture-list';
// import './App.scss';

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'WKdnXNbHSg9MnPSYdq1RbwVWc0fNM_8ELECXhIR5hMo',
          count: 30
        }
      })
      .then(res => {
        this.setState({
          images: [...this.state.images, ...res.data.map(images => images.urls.small)]
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Infinity Photos</h1>
        <PictureList images={this.state.images} />
      </div>
    );
  }
}

export default App;