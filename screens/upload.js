import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, TextInput, Platform, KeyboardAvoidingView, ScrollView} from "react-native";
import {Header, Text} from "react-native-elements";
import { useRoute } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import * as action from './../store/action/index'

function Upload(props) {
    const style=StyleSheet.create({
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        },
        screen:{
            flex:1,
            backgroundColor:'#353338'
        },
        content:{
            backgroundColor:'#353338'
        }
    })

    const route=useRoute()
    const dispatch=useDispatch()

    const [input,setInput]=useState()

    const inputHandler=(textInput)=>{
        setInput(textInput)
    }

    return (
        <View style={style.screen}>
            <Header
                centerComponent={<Text style={style.headerTitle}>发布</Text>}
                rightComponent={{ icon: 'send', color: '#fff',type:'feather',onPress:()=>{dispatch(action.post(input,route.params?.pickedImage));props.navigation.navigate('Home')}}}
                backgroundColor={'#37435d'}
            />
            <ScrollView>
                <View style={style.content}>
                    <View style={{height:300,width:Dimensions.get('window').width}}>
                        <Image source={{uri:route.params?.pickedImage}} style={{height:'100%',width:'100%'}}/>
                    </View>
                    <View style={{padding:10}}>
                        <TextInput
                            scrollEnabled
                            multiline
                            placeholder={'添加描述...'}
                            placeholderTextColor={'grey'}
                            onChangeText={inputHandler}
                            value={input}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Upload;