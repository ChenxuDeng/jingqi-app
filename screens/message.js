import React, {useEffect,useState,useCallback} from 'react';
import {
    View,
    StyleSheet,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import {Avatar, Header, Text, ListItem, Button, SearchBar, Icon, InputProps} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import {Bubble, GiftedChat, InputToolbar, MessageText, Send} from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native';

function Message(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1
        },
        content:{
            backgroundColor:'#353338',
            flex:1,
            padding:10
        },
        searchAndroid:{
            backgroundColor:'#37435d',
            borderRadius:30,
            height:40
        },
        searchIos:{
            backgroundColor:'transparent'
        },
        rightIcon:{
            marginTop:3
        }
    })

    const route=useRoute()

    const [textInput,setTextInput]=useState(null)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { statusLib } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                const {statusCam}= await ImagePicker.requestCameraPermissionsAsync()
                if (statusLib && statusCam !== 'granted') {
                    alert('Sorry, we need permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: '你好',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: route.params?.avatar,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const takeImage=async()=>{
        let result=await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
    }

    const pickImage=async ()=>{
        let resultPick=await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
    }

    return (
        <KeyboardAvoidingView style={style.screen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Header
                leftComponent={{ icon: 'chevron-back', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.navigate('Sub',{msg:messages[0].text})}}}
                centerComponent={
                    <View style={{flexDirection:'row'}}>
                        <Avatar rounded containerStyle={{height:30,width:30,marginTop:-2}} source={{uri:route.params?.avatar}}/>
                        <Text style={{color:'white',marginLeft:10,marginTop:2}}>
                            {route.params?.name}
                        </Text>
                    </View>
                }
                rightComponent={{ icon: 'exclamationcircleo', color: '#fff',type:'antdesign',size:20,style:style.rightIcon,onPress:()=>{props.navigation.navigate('Setting',{avatar:route.params?.avatar,name:route.params?.name})}}}
                backgroundColor={'#37435d'}
                placement={'left'}
            />
                <View style={style.content}>
                    <View style={{alignItems:'center'}}>
                        <Avatar rounded size={'large'} source={{uri:route.params?.avatar}}/>
                        <Text style={{fontSize:17,color:'white',marginTop:6}}>
                            {route.params?.name}
                        </Text>
                        <Button title={'主页'}
                                type={'outline'}
                                titleStyle={{fontSize:14,color:'#4d5464'}}
                                buttonStyle={{borderColor:'#4d5464',paddingVertical:3,paddingHorizontal:6}}
                                containerStyle={{marginTop:6}}
                                onPress={()=>{props.navigation.navigate('UserHome',{name:route.params?.name,avatar:route.params?.avatar})}}
                        />
                    </View>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        alignTop
                        placeholder={'发消息...'}
                        keyboardShouldPersistTaps={'never'}
                        alwaysShowSend
                        renderActions={(props)=>{
                            return <View style={{justifyContent:'center',height:45,marginLeft:17,marginBottom:2}}>
                                <Icon name={'camera'} type={'ionicon'} size={27} onPress={takeImage}/>
                            </View>
                        }}
                        renderSend={(props)=>{
                            return <View style={{flexDirection:'row',alignItems:'center',height:50,marginRight:17}}>
                                <Icon name={'image'} type={'ionicon'} style={{marginTop:3}} onPress={pickImage}/>
                                <Send {...props}>
                                    <View style={{justifyContent:'center',alignItems:'center',height:40,marginBottom:1.5,marginLeft:5}}>
                                        <Icon name={'arrow-up'} type={'ionicon'}/>
                                    </View>
                                </Send>
                            </View>
                        }}
                        renderInputToolbar={(props)=>{
                            return <InputToolbar
                                {...props}
                                containerStyle={{backgroundColor:'#37435d',borderRadius:30,borderTopColor:'transparent'}}
                            />
                        }}
                        renderBubble={(props)=>{
                            return <Bubble
                                {...props}
                                textStyle={{
                                    left:{
                                        color:'white'
                                    },
                                    right:{
                                        color:'white'
                                    }
                                }}
                                wrapperStyle={{
                                    left:{
                                        backgroundColor:'#4d5464'
                                    },
                                    right:{
                                        backgroundColor:'#37435d'
                                    }
                                }}/>
                        }}
                        user={{
                            _id: 1,
                        }}
                    />
                </View>
        </KeyboardAvoidingView>
    );
}

export default Message;