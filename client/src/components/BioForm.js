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
      <Grid.Column width={6}>
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

          <Button>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>

    );
  }
}

export default connect()(BioForm)
