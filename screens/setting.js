import React,{useState} from 'react';
import {View, StyleSheet, Switch, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";
import {Avatar, Button, Divider, Header, Icon, ListItem, Text} from "react-native-elements";
import CustomSwitch from "../components/customSwitch";
import {useRoute} from '@react-navigation/native'
import {BottomSheet} from "react-native-elements";

function Setting(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1
        },
        content:{
            backgroundColor:'#353338',
            flex:1,
            padding:10
        },
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        }
    })

    const route=useRoute()
    const [bottomSheet,setBottomSheet]=useState(false)

    return (
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'chevron-back', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.goBack()}}}
                centerComponent={<Text style={style.headerTitle}>设置</Text>}
                backgroundColor={'#37435d'}
            />
            <View style={style.content}>
                <CustomSwitch text={'屏蔽消息'}/>
                <CustomSwitch text={'禁止视频聊天'}/>
                <Text style={{color:'white'}}>
                    成员
                </Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:14}}>
                    <Avatar rounded size={'medium'} source={{uri:route.params?.avatar}}/>
                    <ListItem.Content style={{marginLeft:10}}>
                        <ListItem.Title style={{color:'white'}}>{route.params?.name}</ListItem.Title>
                    </ListItem.Content>
                    <View style={{marginLeft:'auto'}}>
                        <Button title={'取消关注'}
                                type={'outline'}
                                titleStyle={{color:'#4d5464',fontSize:12}}
                                buttonStyle={{borderColor:'#4d5464',padding:5}}
                                onPress={()=>{setBottomSheet(!bottomSheet)}}
                        />
                    </View>
                </View>
                <Divider style={{backgroundColor:'#4d5464',marginTop:10}}/>
                <TouchableOpacity>
                    <Text style={{color:'white',marginVertical:14}}>
                        举报
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color:'white'}}>
                        屏蔽
                    </Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={()=>{setBottomSheet(false)}}>
                    <BottomSheet isVisible={bottomSheet}>
                        <ListItem containerStyle={{backgroundColor:'#4d5464'}}>
                            <ListItem.Content style={{alignItems:'center'}}>
                                <ListItem.Title>
                                    <View style={{alignItems:'center'}}>
                                        <View>
                                            <Avatar rounded size={'medium'} source={{uri:route.params?.avatar}}/>
                                        </View>
                                        <View style={{marginBottom:10,marginTop:6}}>
                                            <Text style={{color:'white',fontWeight:'bold'}}>
                                                {route.params?.name}
                                            </Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={{color:'grey'}}>
                                                取消关注
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    </BottomSheet>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default Setting;