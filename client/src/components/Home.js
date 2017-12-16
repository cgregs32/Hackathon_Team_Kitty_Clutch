import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import BioForm from  './BioForm'
import {Segment} from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <BioForm />
      </Segment>
    );
  }
}

export default Home;
