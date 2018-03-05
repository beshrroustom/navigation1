import React from 'react';
import {Text,View,Button,Image} from 'react-native';

export default class Fav extends React.Component{
        //THIS IS TO EDIT THE LABEL AT THE BOTTOM

    static navigationOptions = {
        tabBarLabel: 'Favorites',
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('../images/favIcon.png')}
                style={{width: 25, height: 25, tintColor:'white'}}
            >
             </Image>
        )
    }

    render(){
            //FILL THIS WITH THE FAV PAGE YOU WANT

        return <View style ={
            {
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }
        }>
        <Text style ={{fontSize:30}}>
                Favorites :)) {"\n"}
                put your fav stuff here {"\n"}
                you can choose to have icons or/and words for the label below
            </Text>
            </View>
    }
}