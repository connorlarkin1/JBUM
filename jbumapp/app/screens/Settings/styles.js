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
  popupContainer: {
    width: '95%',
    marginBottom: 15,
    marginLeft:"3%",
    backgroundColor: 'white',
    borderRadius: 9,
    shadowColor: '#282C34',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontFamily: 'Avenir',
    fontSize: 16,
    color: '#AAAAAA',
    fontWeight: '500'
  },
  popupTitle: {
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#212A30',
  },
  popupSubTitles: {
    fontFamily: 'Avenir',
    marginTop: '3%',
    fontSize: 16,
    color: 'gray',
    marginBottom: 5
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
