import React, {Component}from "react";
import { View,Text,ScrollView } from "react-native";
import axios from "axios"; 
import CarDetail from "./CarDetail";

class CarList extends Component{
    constructor(){
        super();
        this.state={carList:[]};
    }
    componentDidMount(){
        axios.get('https://givecars.herokuapp.com').then(response =>{
            //console.log(response);
            this.setState({carList: response.data});
            //onlu way to update component state
        });
    }
renderList=()=>{
    return this.state.carList.map((brand)=>{
        return <CarDetail key={brand.model[0].name} brand={brand}/>
    })
}

   render(){
       console.log(this.state);
       return(
<ScrollView>
    {this.renderList()}
</ScrollView>
    );
   }
}

export default CarList;