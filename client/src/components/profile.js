import React from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import {Grid} from 'semantic-ui-react'
import BioForm from './BioForm';


const Profile = (props) => {
  return (
    <div>
      <h1 className="centered">Profile Page</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column className='centered' width={10}>

            <h1>Posts</h1>
            <PostForm/>
            <PostList />
            <BioForm />
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Profile
