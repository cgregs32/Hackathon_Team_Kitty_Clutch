import React from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import {Grid} from 'semantic-ui-react'

const Profile = (props) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <h1>profile</h1>
            <h1>friends</h1>

          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Posts</h1>
            <PostForm/>
            <PostList />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Profile
