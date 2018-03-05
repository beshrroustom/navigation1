import React from 'react';
import {Text,View,Button,Image} from 'react-native';

export default class Settings extends React.Component{
        //THIS IS TO EDIT THE LABEL AT THE BOTTOM

    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('../images/settingsIcon.png')}
                style={{width: 25, height: 25, tintColor:'white'}}
            >
             </Image>
        )
    }

    render(){
                //FILL THIS WITH THE SETTINGS PAGE YOU WANT

        return <View style ={
            {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }
        }>
        <Text style ={{fontSize:30}}>
                Settings -_- {"\n"}
                This is the settings page
            </Text>
            </View>
    }
}