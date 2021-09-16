//import library
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import CarList from './src/components/CarList';
//create component

const App1 = () => {
  return (<View style={{flex:1}}>
    <Header title={"cars"} />
    <CarList/>
    </View>);
  

   
 
};

//render
AppRegistry.registerComponent('cars',()=> App1);

