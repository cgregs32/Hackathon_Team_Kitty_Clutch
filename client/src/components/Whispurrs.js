import React from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import {Grid} from 'semantic-ui-react'

const Whispurrs = (props) => {
  return (
    <div>
      <h1 className="centered">Careless Whispurrs</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column className='centered' width={10}>

            <h1>Posts</h1>
            <PostForm/>
            <PostList />

          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Whispurrs
