/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const PostViewer = (props) => {
  const { post, isCurrentPostLoaded } = props;
  return (
    <section className="main-content container-wrapper">
      <div className="container">
        {isCurrentPostLoaded
          ? (
            <div className="post-wrapper">
              <div className="post-viewer">
                <h3>{post.postDetail.title}</h3>
                <h5>{post.author.name}</h5>
                <p>{post.postDetail.body}</p>
              </div>
              <ul className="post-comments">
                {post.comments.map(comment => (
                  <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
          : <h2>Loading...</h2>
        }
      </div>
    </section>
  );
};

PostViewer.propTypes = {
  post: PropTypes.object,
  isCurrentPostLoaded: PropTypes.bool,
};

PostViewer.defaultProps = {
  post: {
    postDetail: {},
    author: {},
    comments: [],
  },
  isCurrentPostLoaded: false,
};

export default withRouter(connect(
  state => ({
    post: state.currentPost,
    isCurrentPostLoaded: state.isCurrentPostLoaded,
  }),
)(PostViewer));
