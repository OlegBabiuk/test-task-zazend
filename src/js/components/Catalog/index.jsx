import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as postsActions from '../../sagas/posts';
import * as postActions from '../../sagas/currentPost';


class Catalog extends React.Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, getPost, isShowPreloader } = this.props;
    return (
      <section className="main-content container-wrapper">
        <div className="container">
          {isShowPreloader
            ? <h2>Loading...</h2>
            : (
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
            )}
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  getPosts: PropTypes.func,
  getPost: PropTypes.func,
  posts: PropTypes.arrayOf,
  isShowPreloader: PropTypes.bool,
};

Catalog.defaultProps = {
  getPosts: () => console.log("getPosts didn't pass"),
  getPost: () => console.log("getPost didn't pass"),
  posts: [],
  isShowPreloader: true,
};

const mapStateToProps = state => ({
  posts: state.posts,
  isShowPreloader: state.isShowPreloader,
});

const mapDispatchToProps = {
  getPosts: postsActions.getPosts,
  getPost: postActions.getPost,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog));
