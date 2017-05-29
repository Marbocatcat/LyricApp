import React, { Component } from 'react';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const entry = 'http://api.musixmatch.com/ws/1.1?apikey=';
    const key = '7885079d866f945ccb7b2d819c5f5cc4';
  fetch(entry, {
    method: 'POST',
    headers: {
      Authorization: key
    }
  })
  .then((response) => response.JSON())
  .then((responseJSON) => {
    console.log(responseJSON);
  })
  .catch((error) => {
    console.log(error);
  });
}
  render() {
    return (
      <Router />
    );
  }
}
