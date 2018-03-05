import React from 'react';
import {Text,View,Image} from 'react-native';

import {TabNavigator} from 'react-navigation';
import Fav from './tabs/Fav'
import Home from './tabs/Home'
import Settings from './tabs/Settings'

var MainScreenNavigator =TabNavigator({
  Tab1:{screen: Fav},
  Tab2:{screen: Home},
  Tab3:{screen: Settings}
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor:'white',
    activeBackgroundColor: '#CFB53B',
    inactiveTintColor:'black',
    inactiveBackgroundColor:'#C5B358',
    labelStyle: {
      fontSize:16,
      padding:0
    },
    
  }
});

MainScreenNavigator.navigationOpotions={
  title:"tab"
};
export default MainScreenNavigator;