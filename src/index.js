import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App  = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45pm" commentText="Awesome" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 6:00pm" commentText="Cool" image={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterdat at 3:45pm" commentText="Needs more information!" image={faker.image.avatar()}/>
      </ApprovalCard>
    </div>

  )
}



ReactDOM.render(<App />, document.querySelector('#root'))
