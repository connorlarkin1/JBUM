import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { Icon, Divider, Badge } from 'react-native-elements'
import ReactNativeHaptic from 'react-native-haptic';

import styles from './styles';

export default class InboxPanel extends Component {
  handleOnTouch = () => {
    const { navigation } = this.props;
    ReactNativeHaptic.generate('selection')
    navigation.navigate("Reply",{ postContent: this.props.post, commentSelected: this.props.commentId });
  }
  render() {
    const { commentBody, createdAt, post, onArchivePress,commentId } = this.props;
    return (
      <View style={styles.questionPanelContainer}>
        <View style={styles.bottom}>
          <Text style={styles.title}>{commentBody}</Text>
          <View style={{marginRight:-12, marginTop: 8}}>
            <Icon
              name='clear'
              color='#D4D4D4'
              containerStyle={styles.buttonImage}
              onPress={() => {onArchivePress(commentId);ReactNativeHaptic.generate('selection')}}
            />
          </View>

        </View>
        <View style={{ marginTop: -6, marginLeft: 12, marginBottom: 2}}>
          <Text style={[styles.timeText, styles.created]}>{' '+moment(createdAt).fromNow()}</Text>
        </View>
        <TouchableOpacity onPress={this.handleOnTouch}  activeOpacity={0.65}>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={styles.myDescription}>Original Post{/*: {post.post_title}*/}</Text>
          <Icon
            style={{marginBottom: 0, marginTop: 1.3}}
            name='send'
            size={18}
            color='#5CC2D6'
          />
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}
