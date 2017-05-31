import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Search from './components/Search';
import Results from './components/Results';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='search' component={Search} title='Lyrics' initial />
      <Scene key='result' component={Results} title='Lyrics' />
    </Router>
  );
};

export default RouterComponent;
