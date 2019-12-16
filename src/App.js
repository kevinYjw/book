import React from 'react';
import Header from './common/header'
import {GlobalStyle} from './style.js';
import {GlobalIconfont} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle/>
        <GlobalIconfont/>
        <Header/>
      </div>
    </Provider>
  );
}

export default App;
