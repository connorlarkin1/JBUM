import { StyleSheet, Dimensions } from 'react-native';
import { colors,DEVICE_WIDTH,DEVICE_HEIGHT } from '../../config/styles';

const window = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 40,
    backgroundColor: colors.inputBackground,
    borderRadius: 20,
    width: DEVICE_WIDTH - 20,

    justifyContent: 'center',
    marginHorizontal: 10,
    paddingLeft: 45,
  },
  buttons: {

    marginTop: 80,
    flexDirection: 'row',
    alignSelf: 'flex-end',

  },


});
