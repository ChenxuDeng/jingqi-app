import React, {useState} from 'react';
import {Text} from "react-native-elements";
import {Switch, View} from "react-native";

function CustomSwitch(props) {
    const [switchState,setSwitchState]=useState(false)

    return (
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:14}}>
            <Text style={{color:'white'}}>
                {props.text}
            </Text>
            <Switch style={{marginLeft:'auto'}}
                    onValueChange={()=>{setSwitchState(!switchState)}}
                    value={switchState}
                    thumbColor={'#37435d'}
            />
        </View>
    );
}

export default CustomSwitch;