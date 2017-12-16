import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getUsers} from '../actions/users'
import {Segment, List, Button, Image, Grid} from 'semantic-ui-react'

class UserList extends React.Component {

  componentDidMount(){
    this.props.dispatch(getUsers())
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      return (
    <Grid width={4}>
        <Segment>
          <List.Item>
            {user.name}
          </List.Item>
          <List.Item>
            {user.nickname}
          </List.Item>
          <List.Item>
            {user.email}
          </List.Item>
          <List.Item>
            <Image src={user.image} />
          </List.Item>
          <Button primary>Add Friend</Button>
        </Segment>
      </Grid>
      )
    })
  }


  render () {
    return(
      <Segment>
        <List>
          {this.renderUsers()}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(UserList);
