import React from 'react'
import faker from 'faker'

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.commentText}</div>
    </div>
  )
}

export default CommentDetail
