import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic'
  },
  backdrop: {
      backgroundColor: '#F3F3F3',
      flex: 1,
  },
  logo: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
  },
  text: {
      color: 'black',
      fontFamily: 'Avenir',
      fontSize: 17
  },
  textBold: {
      color: 'black',
      fontFamily: 'Avenir',
      fontSize: 17,
      fontWeight: 'bold'
  },
  bottom: {
      backgroundColor: 'white',
      borderRadius: 10,
  },
  bottomBox: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
      backgroundColor: '#F3F3F3',
  },
  views: {
      paddingTop: 7,
      paddingLeft: 12,
      paddingRight: 12,
      //Also padding-bottom can be added too
      // This can be changed to add a divider between the boxes; change to E5E5E5

  },
  dropDown: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
      paddingBottom: 10,
      paddingTop: 15,
      paddingLeft: 17
  },
  largeText: {
      height: 50,
      color: '#BBB',
      textAlign: 'center',
      fontSize: 24,
      fontFamily: 'Avenir-Book'

  },
  smallText: {
      height: 150,
      color: '#BBB',
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 17,
      fontFamily: 'Avenir',

  },
  lineDivider: {
    width: 320,
    borderTopColor: '#DBD9D9',
    borderTopWidth: .5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropdown: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      flex: 0
  },
  selectors: {
    margin: 8,
  },
  selectorText: {
    fontFamily: 'Avenir',
    color: '#BABABA',
    fontSize: 14,
    margin: 4
  },
  dropdownBackground: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  addTags: {
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#BABABA',
    padding: 3.5
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  headerText: {
    borderRadius: 10,
    fontSize: 30,
    fontWeight: 'bold',
  }
});
