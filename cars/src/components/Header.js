import React from 'react';
import {Text,View} from 'react-native';

const Header = props => {
  const {Textstyle,viewstyling} = styles;
  return (
  <View style={viewstyling}>
    <Text style={Textstyle}>{props.title}</Text>
  </View>
  );

};
const styles={
  Textstyle:{
    fontSize: 22
  },

  viewstyling:{
    backgroundColor:"gainsboro",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  }
};
export default Header;
