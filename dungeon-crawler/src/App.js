import React, { Component } from 'react';
import Player from './features/player'
import Map from './features/map'

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Player />
      </div>
    )
  }
}

export default App;
