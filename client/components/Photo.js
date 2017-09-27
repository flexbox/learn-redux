import React from 'react';
import { Link } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group'

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcation>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">
              ❤ {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcation>
      </figure>
    )
  }
});

export default Photo;
