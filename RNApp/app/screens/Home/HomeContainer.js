import React, { PropTypes, Component } from 'react';

import Meteor, { createContainer } from 'react-native-meteor';


import Home from './Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);


    this.mounted = false;

  }

  componentWillMount() {
    this.mounted = true;
  }

  onAskPress() {
    console.log('Ask');

    this.props.navigation.navigate('Ask');

  }

  render() {
    const { posts } = this.props;
    return (
      <Home
        posts={posts}
        onAskPress={this.onAskPress.bind(this)}
        navigation={this.props.navigation}
        {...this.state}
      />
    );
  }
};

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');

  return {
    posts: Meteor.collection('posts').find({},{ sort: { createdAt: -1 } })
  };
}, HomeContainer);
