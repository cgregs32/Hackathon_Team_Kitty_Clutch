import React from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList'
import {Grid, Container} from 'semantic-ui-react'

const UserPage = (props) => {
  return (
    <Container>
      <Grid>
        <Grid.Column width={16}>
          <UserList/>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default UserPage
