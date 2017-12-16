import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import BioForm from  './BioForm'
import {Segment} from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Careless Whispurrs</Header>
      </div>
    );
  }
}

export default Home;
