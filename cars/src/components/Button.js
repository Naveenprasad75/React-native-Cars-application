import React from "react";
import { Text ,TouchableOpacity} from "react-native";

const Button=props=>{
    return (<TouchableOpacity onPress={props.buttonPress} style={styles.buttonStyle}> 
        <Text style={styles.textStyle}>Click me</Text>
        </TouchableOpacity>);
};
const styles={
    textStyle:{
        fontSize:14,
        fontWeight:"500",
        paddingTop:6,
        paddingBottom:6,
        color:"white"
    },
    buttonStyle:{
        flex:1,
        alignSelf:"stretch",
        backgroundColor:"grey",
        borderWidth:1,
        textalign:'center'
    }
}

export default Button;