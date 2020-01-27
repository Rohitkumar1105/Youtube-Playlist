import React, { Component } from 'react';
import Playlist from './Components/playlist';
import URL from './Components/URL';
import { Provider } from 'react-redux'
import store from './store';
 
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <URL />
        </div>
      </Provider>
    )
  }
}

export default App;