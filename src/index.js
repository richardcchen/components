import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App  = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45pm" commentText="Awesome" image={faker.image.avatar()}/>
      <CommentDetail author="Alex" timeAgo="Today at 6:00pm" commentText="Cool" image={faker.image.avatar()}/>
      <CommentDetail author="Jane" timeAgo="Yesterdat at 3:45pm" commentText="Needs more information!" image={faker.image.avatar()}/>
    </div>

  )
}



ReactDOM.render(<App />, document.querySelector('#root'))
