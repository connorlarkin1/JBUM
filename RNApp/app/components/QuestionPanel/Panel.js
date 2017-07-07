import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { Icon, Divider } from 'react-native-elements'


import images from '../../config/images';
import styles from './styles.js';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likes: 0,
      comments: 0,

      is_visible: false,
      expanded: false,
      animation: new Animated.Value(),
    };

    this.setMaxHeight = this.setMaxHeight.bind(this);
    this.setMinHeight = this.setMinHeight.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  _onPress() {
    this.setState({ liked: !this.state.liked });
    if (this.state.liked) {
      this.setState({ likes: this.state.likes = this.state.likes - 1 });

    }
    else {
      this.setState({ likes: this.state.likes = this.state.likes + 1 });
      console.log('liked');
    }
  }

  onReplyPress(){
    const { navigation, header,body } = this.props;

    let title = header;


    if (navigation) {
      navigation.navigate("Reply",{ title: header,body:body });
    }


  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ is_visible: true });
    }, 100);
  }

  toggle() {
    const { expanded, maxHeight, minHeight, animation } = this.state;
    const { onPress } = this.props;

    const initialValue = expanded ? maxHeight + minHeight : minHeight;
    const finalValue = expanded ? minHeight : maxHeight + minHeight;

    this.setState({ expanded: !expanded });

    animation.setValue(initialValue);

    Animated.spring(animation, { toValue: finalValue }).start();

    if (onPress) onPress();
  }

  setMaxHeight(event) {
    const maxHeight = event.nativeEvent.layout.height
    this.setState({ maxHeight });
  }

  setMinHeight(event) {
    const minHeight = event.nativeEvent.layout.height
    this.state.animation.setValue(minHeight);
    this.setState({ minHeight });
  }

  renderHeader() {
    const { header } = this.props;
    const { expanded } = this.state;
    const icon = expanded ? images.arrowUp : images.arrowDown;

    if (typeof header === 'function') {
      return header();
    } else if (typeof header === 'string') {
      return (
        <View style={styles.button}>
          <Text style={styles.title}>{header}</Text>
          <Image style={styles.buttonImage} source={icon} />
        </View>
      );
    } else {
      return (
        <View style={styles.button}>
          <Text style={styles.title}>
            [Must be String, or Function that {'\n'}
            render React Element]
            </Text>
          <Image style={styles.buttonImage} source={icon} />
        </View>
      );
    }
  }

  render() {
    const { children, style, header } = this.props;
    const { expanded, animation } = this.state;
    let { liked, likes, comments } = this.state;

    return (
      <View style={styles.questionPanelContainer}>
        <Animated.View style={[
          styles.questionPanelContainer, style, {
            overflow: 'hidden',
            height: animation
          }
        ]}>
          <TouchableOpacity
            ref={ref => this._header = ref}
            activeOpacity={1}
            onPress={this.toggle}
            onLayout={this.setMinHeight}
          >
            {this.renderHeader()}
          </TouchableOpacity>
          {this.state.is_visible &&
            <View onLayout={this.setMaxHeight}>
              {children}
            </View>
          }
        </Animated.View>

        <View style={styles.lineDivider} />
        <View style={styles.bottom}>

          <TouchableOpacity style={styles.imgs} onPress={() => this._onPress()}>
            <Image
              source={liked ? images.heartFilled : images.heartUnfilled}
              style={styles.heartFilled}
            />
          </TouchableOpacity>
          <Text style={styles.counters}>{likes} Loved</Text>

          <TouchableOpacity style={styles.imgs}>
            <Image
              source={images.commentIcon}
              style={styles.commentButton}
            />

          </TouchableOpacity>
          <Text style={styles.counters}>{comments} Responses  </Text>
          <Icon
            name='redo'
            color='#d8d8d8'
            onPress={() => this.onReplyPress()}
          />
        </View>

      </View>
    );

  }
}

Panel.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  onPress: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Panel;