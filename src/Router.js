import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Search from './components/Search';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='search' component={Search} title='Lyrics' />
    </Router>
  );
};

export default RouterComponent;
