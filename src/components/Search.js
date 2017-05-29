import React from 'react';
import { Text } from 'react-native';

import { Card, CardSection, Input, Button } from '../common';

const Search = () => {
  return (
    <Card style={{ paddingTop: 20 }}>
      <CardSection>
        <Input placeholder='Title' label='Search' />
      </CardSection>
      <CardSection>
        <Button>Search</Button>
      </CardSection>
    </Card>
  );
};

export default Search;
