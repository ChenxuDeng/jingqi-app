import React from 'react';
import {View,StyleSheet,Dimensions} from "react-native";

function MsgBubble(props) {
    const style=StyleSheet.create({
        chat:{
            borderColor:'#353338',
            borderWidth:1,
            borderRadius:10,
            padding:10,
            marginTop:10,
            backgroundColor:'#4d5464',
            alignSelf:'flex-start'
        }
    })

    return (
        <View style={{...style.chat,...props.style}}>
            {props.children}
        </View>
    );
}

export default MsgBubble;