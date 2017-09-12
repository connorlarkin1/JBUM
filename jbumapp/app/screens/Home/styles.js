import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.background,
    flexDirection: 'column',
    height: 40,
    borderRadius: 50,
    zIndex: 100
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5
	},
  actionButtonIcon: {
    height: 22,
  },
  quoteText: {
    marginTop: '2%',
    marginLeft: '10%',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 35
  },
  authorText: {
    marginTop: '2%',
    marginLeft: '10%',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 35
  },
  welcomeText: {
    marginTop: '-102%',
    marginLeft: '10%',
    fontFamily: 'Avenir',
    fontSize: 45,
    fontWeight: '700'
  }
});
