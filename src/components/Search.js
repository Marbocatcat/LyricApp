import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button } from '../common';
import { key } from '../util/Key';

export default class Search extends Component {
  state = {
    Artist: '',
    Title: '',
  }

  handleArtist = text => {
    const Artist = text;
    this.setState({ Artist });
  }

  handleTitle = text => {
    const Title = text;
    this.setState({ Title });
  }

  handleSearch = () => {
    const entry = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?&callback=callback&q_track=${this.state.Title}&q_artist=${this.state.Artist}&apikey=`;
    fetch(entry + key).then((response) => response.json())
    .then((responseJSON) => {
      const lyrics = responseJSON.message.body.lyrics.lyrics_body;
      
      Actions.result();
    })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Card style={{ paddingTop: 20 }}>
        <CardSection>
          <Input placeholder='Artist' label='Artist' onChangeText={this.handleArtist} />
        </CardSection>
        <CardSection>
          <Input placeholder='Title' label='Title' onChangeText={this.handleTitle} />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSearch}>Search</Button>
        </CardSection>
      </Card>
    );
  }
}
