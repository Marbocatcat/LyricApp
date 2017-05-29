import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

const Root = () => {
  return (
    <App />
  )
}

AppRegistry.registerComponent('lyricApp', () => Root);
