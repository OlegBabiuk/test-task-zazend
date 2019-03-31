import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const PostViewer = (props) => {
  const { post, isShowPreloader } = props;
  return (
    <section className="main-content container-wrapper">
      <div className="container">
        {isShowPreloader
          ? <h2>Loading...</h2>
          : (
            <div className="post-viewer-wrapper">
              <div className="post-viewer">
                <h3>{post.postDetail.title}</h3>
                <div className="post-viewer_info">
                  <h5 className="post-viewer_info__author">
                    {post.author.name}
                  </h5>
                  <h5 className="post-viewer_info__comments">
                    {post.comments.length}
                    <span>Comments</span>
                  </h5>
                </div>
                <p>{post.postDetail.body}</p>
              </div>
              <ul className="post-comments">
                <p className="post-comments_info">
                  <span>This Post Has</span>
                  {post.comments.length}
                  <span>Comments</span>
                </p>
                {post.comments.map(comment => (
                  <li
                    key={comment.id}
                    className="post-comments_item"
                  >
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </section>
  );
};

PostViewer.propTypes = {
  post: PropTypes.objectOf,
  isShowPreloader: PropTypes.bool,
};

PostViewer.defaultProps = {
  post: {
    postDetail: {},
    author: {},
    comments: [],
  },
  isShowPreloader: true,
};

const mapStateToProps = state => ({
  post: state.currentPost,
  isShowPreloader: state.isShowPreloader,
});

export default withRouter(connect(
  mapStateToProps,
)(PostViewer));
