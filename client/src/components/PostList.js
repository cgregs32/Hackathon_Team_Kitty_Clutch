import React from 'react'
import PropTypes from 'prop-types'

class PostList extends React.Component {

  

  renderPosts = () => {
    {}
  }

  render () {
    return (
      <div>
        this is the posts
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default PostList;
