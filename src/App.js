import React, { Component } from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard><h4>warning</h4>Are you sure you wanna do this?</ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            content="sssss!"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00AM"
            content="Nice blog!"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 5:00PM"
            content="thanks!"
            avatar={faker.image.avatar()} />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
