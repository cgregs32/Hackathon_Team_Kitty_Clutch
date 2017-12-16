import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid, Form, Input, Button } from 'semantic-ui-react';
import { addBio } from '../actions/bios';

class BioForm extends React.Component {
  state = { name: "", description: "", gender: "", location: "" };

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, description, gender, location}= this.state
    const bio = {name, description, gender, location}
    this.setState({name: "", description: "", gender: "", location: "" })
    this.props.dispatch(addBio(bio))
  }

  render() {
    return (
      <Grid>
        <Header as="h2" textAlign="center">Create a Bio</Header>
      <Grid.Column width={12}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Full Name'
              width={8}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="description"
              required
              value={this.state.description}
              onChange={this.handleChange}
              placeholder='Description'
              width={8}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="location"
              required
              value={this.state.location}
              onChange={this.handleChange}
              placeholder='Location'
              width={8}
            />
          </Form.Group>

          <Button>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>

    );
  }
}

export default connect()(BioForm)
