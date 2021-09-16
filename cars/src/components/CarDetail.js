import React from "react";
import {Text,View,Image,Linking} from "react-native";
import Item from './Item'; 
import ItemSection from "./ItemSection";
import Button from "./Button";

const CarDetail= ({brand}) =>{
    const{headerContainers,headerText,imageStyle} =styles;
    return(
    <Item>
        <ItemSection>
            <View style={headerContainers}>
                    <Text style={headerText}>{brand.brand}</Text>
        <Text style={headerText}>{brand.model[0].name}</Text>
        
        </View>
        </ItemSection>
        <ItemSection>
            <Image style={imageStyle} source={{uri:brand.model[0].image}}/>
        </ItemSection>
        <ItemSection>
            <Button
            buttonPress={()=>{
                Linking.openURL(brand.model[0].url);
            }}
            />
        </ItemSection>
    </Item>
    );

};
const styles={
    headerContainers:{
        flexDirection:"column",
        justifyContent:"space-between"
    },
    headerText:{
        fontSize: 18,
        fontWeight: '500',
        textTransform:'uppercase'
    },
    imageStyle:{
height:300,
flex:1,
width:0
    }
}
export default CarDetail;