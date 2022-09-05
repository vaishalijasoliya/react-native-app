import React from 'react';
import { ViewBase,Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

class App extends React.Component{
  render(){
    return(
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize=80}}>React Navigation</Text>
      </View>
    )
  }
}

const AppNavigator=createStackNavigator({
  Home:{
    screen:App
  }
})

export default createAppContainer(AppNavigator);