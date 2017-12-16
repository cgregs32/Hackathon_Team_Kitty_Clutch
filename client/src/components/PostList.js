import React from 'react'
import {connect} from 'react-redux'
import { Segment, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {getPosts} from '../actions/posts'

class PostList extends React.Component {

  componentDidMount(){
    this.props.dispatch(getPosts())
  }

  renderPosts = () => {
    const {id} = this.props
    return this.props.posts.map(post => {
      return(
        <Segment.Group key={id}>
          <Segment>{post.title}</Segment>
          <Segment.Group>
            <Segment>{post.body}</Segment>
          </Segment.Group>
          <Link to={`/post/${post.id}`}>Blog Info</Link>
        </Segment.Group>
      )
    })
  }

  render () {
    return (
      <Segment>
        {this.renderPosts()}
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps)(PostList);
