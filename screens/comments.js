import React,{useState,useEffect} from 'react';
import {View, StyleSheet, Text, Keyboard, TextInput, ScrollView, Platform, KeyboardAvoidingView} from "react-native";
import {Avatar, Divider, Header, Icon} from "react-native-elements";
import {useSelector,useDispatch} from "react-redux";
import * as action from '../store/action/index'

function Comments(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1
        },
        content:{
            backgroundColor:'#353338',
            flex:1
        },
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        }
    })

    const dispatch=useDispatch()

    const comment=useSelector((state)=>{
        return state.comment.comment
    })

    const [textInput,setTextInput]=useState()

    const textInputHandler=(input)=>{
        setTextInput(input)
    }

    return (
        <KeyboardAvoidingView style={style.screen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'arrow-left', color: '#fff',type:'feather',onPress:()=>{props.navigation.goBack()}}}
                centerComponent={<Text style={style.headerTitle}>评论</Text>}
                rightComponent={{ icon: 'send', color: '#fff',type:'feather',onPress:()=>{}}}
                backgroundColor={'#37435d'}
            />
            <View style={style.content}>
                <ScrollView>
                    <View style={{flexDirection:'row',margin:10}}>
                        <View>
                            <Avatar rounded source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51porQK0%2BeL._AC_SL1100_.jpg'}}/>
                        </View>
                        <View style={{flexShrink:1}}>
                            <Text style={{fontSize:12,marginLeft:6,color:'white'}}>
                                Heisenberg: 在德国演出中，两个马戏团小丑并排站着。据希斯林报道，近8%的美国人都在与恐惧症作斗争：害怕小丑。
                            </Text>
                        </View>
                    </View>
                    <Divider style={{marginTop:6}}/>
                    {comment.map((comment,index)=>{
                        return <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingTop:12,marginBottom:3}} key={index}>
                            <View>
                                <Avatar source={{uri:comment.avatar}} rounded/>
                            </View>
                            <View style={{marginLeft:6}}>
                                <Text style={{fontSize:12,color:'white'}}>
                                    {comment.name}: {comment.message}
                                </Text>
                            </View>
                        </View>
                    })}
                </ScrollView>
                <View style={{marginTop:'auto',flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginLeft:10}}>
                        <Avatar source={{uri:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg'}} rounded size={'medium'}/>
                    </View>
                    <View style={{borderRadius:30,padding:10,backgroundColor:'#37435d',margin:10,width:'80%',flexDirection:'row',alignItems:'center',paddingHorizontal:16}}>
                        <TextInput placeholder={'添加评论...'} autoFocus style={{width:'100%'}} onChangeText={textInputHandler} value={textInput}/>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'arrowup'} type={'antdesign'} onPress={()=>{dispatch(action.sendComment(textInput))}}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}

export default Comments;