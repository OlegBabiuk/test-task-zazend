/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Catalog extends React.Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, getPost } = this.props;
    return (
      <section className="main-content container-wrapper">
        <div className="container">
          <div className="posts-wrapper">
            <ul>
              {posts.map(post => (
                <li key={post.id} className="post">
                  <Link
                    to={`posts/${post.id}`}
                    onClick={() => {
                      getPost(post.id);
                    }}
                  >
                    <h3>
                      {post.title}
                    </h3>
                    <p>
                      {post.body}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(
  state => ({
    posts: state.posts,
  }),
  dispatch => ({
    getPosts() {
      dispatch({ type: 'GET_ALL_POSTS' });
    },
    getPost(id) {
      dispatch({ type: 'GET_POST', id });
    },
  }),
)(Catalog));
