import React from 'react';
import {
	TabNavigator,
	StackNavigator,
	DrawerNavigator,
	TabView
}
from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import images from '../config/images';
import AccountSetup from '../screens/AccountSetup';
import Answer from '../screens/Answer';
import Profile from '../screens/Profile';
import Reply from '../screens/Reply';
import Ask from '../screens/Ask';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import Inbox from '../screens/Inbox';
import BetaWebview from '../screens/BetaWebview';

import Notifications from '../components/Notifications';
import BarcodeScanner from '../components/BarcodeScanner';

 export const HomeStack = StackNavigator({
   Home: {
     screen: Home,
		 navigationOptions: {
			 header: null
		}
   },
	 Reply: { screen: Reply,
		 navigationOptions: {
			 title: 'Reply',
			/*headerStyle: {
				 borderBottomWidth: 0.5,
				 borderBottomColor: '#d1d1d1',
				 backgroundColor: 'white',
				 elevation: null,
				 height: 50,
				 paddingBottom: 10,
				 paddingTop: 10
			 },
			 headerTitleStyle: {
				 fontFamily: 'Avenir',
				 fontSize: 17.5,
				 fontWeight: '600',
				 marginRight: 10,
				 paddingTop: 2
				},*/
		 },},
		 Profile: {
 			screen: Profile,
 			navigationOptions: {
 					tabBarLabel: 'Profile',
 					tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={30} color={tintColor}/>
 			}
 		},
	 Inbox: { screen: Inbox,
			 navigationOptions: {
				 title: 'Inbox',
				 headerStyle: {
		 				borderBottomWidth: 0.5,
		 				borderBottomColor: '#d1d1d1',
						color: 'white',
		 				height: 50,
		 				paddingBottom: 10,
		 				paddingTop: 10
		 			},
				headerTitleStyle: {
						fontSize: 22,
						fontFamily: 'Avenir'
				},
		 	 }
		 },
   Ask: {
     screen: Ask,
		 navigationOptions: {
 			title: 'Ask Question',
 		 headerStyle: {
 				borderBottomWidth: 0.5,
 				borderBottomColor: '#d1d1d1',
 				backgroundColor: 'white',
 				elevation: null,
 				height: 50,
 				paddingBottom: 10,
 				paddingTop: 10
 			},
 			headerTitleStyle: {
 				fontFamily: 'Avenir',
 				fontSize: 21,
 				fontWeight: '600',
 				marginRight: 10,
 				paddingTop: 2
 			 },
 		}
  },
	Settings: {
		screen: Settings,
		navigationOptions: {
				title: 'Settings',
				tabBarIcon: ({tintColor}) => <Icon name="settings" size={28} color={tintColor}/>
		}
	}},{mode:'modal'});

 export const WelcomeStack = StackNavigator({
 	Welcome: {screen: Welcome,
		navigationOptions: {
			header: null
		}}, 
	Login: { screen: Login ,
		navigationOptions: {
			header: null
		}},
	BetaWebview: { screen: BetaWebview },
 	BarcodeScanner: { screen: BarcodeScanner,
	 navigationOptions: {
		headerStyle: {
		color: null,
		backgroundColor: null,
		height: 20,
	},}},
 	AccountSetup: { screen: AccountSetup,
		navigationOptions: {
			header: null
		}}, 
	},
 	/*{
 		headerMode: 'none',
 		mode:'modal'
 	}*/
);

export const ResponderTabs = TabNavigator({
	HomeStack: {
		screen: HomeStack,
		navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor}/>
		}
	},
	Home: {
		screen: Home,
		navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({tintColor}) => <Icon name="bug-report" size={30} color={tintColor}/>
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
				tabBarLabel: 'Profile',
				tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={30} color={tintColor}/>
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
				tabBarLabel: 'Settings',
				tabBarIcon: ({tintColor}) => <Icon name="settings" size={28} color={tintColor}/>
		}
	},}, {
  tabBarOptions: {
		activeTintColor: '#e91e63',
		tabBarComponent: TabView.TabBarBottom,
		swipeEnabled: false,
		tabBarPosition: 'bottom',
		animationEnabled: true
  },
});

export const ProfileStack = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: 'Login'
		}
	},
}, {
		headerMode: 'none',
		mode:'modal'
});

export default StackNavigator({
	HomeStack: { screen: HomeStack,
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
	}},
	WelcomeStack: { screen: WelcomeStack,
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
	}},
	ResponderTabs: { screen: ResponderTabs,
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
	}},
	BarcodeScanner: { screen: BarcodeScanner,
		navigationOptions: {
			headerStyle: {
					color: null,
					backgroundColor: null,
					height: 0.00001,
				},
		}
	},
	},{
	navigationOptions: {
		tabBarVisible: false,
			mode:'modal'
	}
	});
	const styles =  StyleSheet.create({
		inboxCircle: {
		width: 28,
		height: 28
	}
})
