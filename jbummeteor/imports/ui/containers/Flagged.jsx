import React from 'react';
import GenderSurveyChart from '../components/GenderSurveyChart';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import FlaggedPost from '../components/FlaggedPost';

const Flagged = (props) => {
  const { flaggedPosts, postsReady } = props;
  console.log(postsReady);
  renderFlagPosts = () => {
    if (true) {
      return flaggedPosts.map((post) => (
                <FlaggedPost
                  postContent={post}
                />
              ));
    }

  }

  return (
  <div>
    {postsReady ?
      this.renderFlagPosts(): null}
  </div>
);}


export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  return {
    flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    postsReady: handle.ready()
  }
}, Flagged);
