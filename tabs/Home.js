import React from 'react';
import {Text,View,Button,Image} from 'react-native';

export default class Home extends React.Component{
    //THIS IS TO EDIT THE LABEL AT THE BOTTOM
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('../images/homeIcon.png')}
                style={{width: 30, height: 30, tintColor:'white'}}
            >
             </Image>
        )
    }

    render(){
        //FILL THIS WITH THE HOME PAGE YOU WANT
        return <View style ={
            {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }
        }>
        <Text style ={{fontSize:30}}>
                Home ^_^{"\n"} 
                this will be your home page bud
            </Text>
            </View>
    }
}